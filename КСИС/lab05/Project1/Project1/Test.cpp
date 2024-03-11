#define _CRT_SECURE_NO_WARNINGS
#define _WINSOCK_DEPRECATED_NO_WARNINGS
#include <winsock2.h>
#include <iphlpapi.h>
#include <icmpapi.h>
#include <iostream>
#include <conio.h>

using namespace std;

#pragma comment(lib, "iphlpapi.lib")
#pragma comment(lib, "ws2_32.lib")

// ������� ��� ���������� �����
void Ping(const string& cHost, unsigned int Timeout, unsigned int RequestCount) {
    HANDLE hIP = IcmpCreateFile();
    if (hIP == INVALID_HANDLE_VALUE) {
        cout << "������ �������� ����� Icmp: " << GetLastError() << endl;
        WSACleanup();
        return;
    }
    char SendData[32] = "Data for ping";
    int LostPacketsCount = 0;
    unsigned int MaxMS = 0;
    int MinMS = -1;

    PICMP_ECHO_REPLY pIpe = (PICMP_ECHO_REPLY)GlobalAlloc(GHND, sizeof(ICMP_ECHO_REPLY) + sizeof(SendData));
    if (pIpe == nullptr) {
        IcmpCloseHandle(hIP);
        WSACleanup();
        return;
    }
    pIpe->Data = SendData;
    pIpe->DataSize = sizeof(SendData);

    // �������������� ������ IP-������ � �������� ������
    unsigned long ipaddr = inet_addr(cHost.c_str());
    if (ipaddr == INADDR_NONE) {
        cout << "������ �������������� IP-������" << endl;
        GlobalFree(pIpe);
        IcmpCloseHandle(hIP);
        WSACleanup();
        return;
    }

    IP_OPTION_INFORMATION option = { 255, 0, 0, 0, nullptr };
    for (unsigned int c = 0; c < RequestCount; c++) {
        int dwStatus = IcmpSendEcho(hIP, ipaddr, SendData, sizeof(SendData), &option, pIpe, sizeof(ICMP_ECHO_REPLY) + sizeof(SendData), Timeout);
        if (dwStatus > 0) {
            for (int i = 0; i < dwStatus; i++) {
                unsigned char* pIpPtr = (unsigned char*)&pIpe->Address;
                cout << "����� �� " << (int)pIpPtr[0]
                    << "." << (int)pIpPtr[1]
                    << "." << (int)pIpPtr[2]
                    << "." << (int)pIpPtr[3]
                    << ": ����� ���� = " << pIpe->DataSize
                    << " ����� = " << pIpe->RoundTripTime
                    << "�� TTL = " << (int)pIpe->Options.Ttl;
                MaxMS = (MaxMS > pIpe->RoundTripTime) ? MaxMS : pIpe->RoundTripTime;
                MinMS = (MinMS < (int)pIpe->RoundTripTime && MinMS >= 0) ? MinMS : pIpe->RoundTripTime;
                cout << endl;
            }
        }
        else {
            if (pIpe->Status) {
                LostPacketsCount++;
                switch (pIpe->Status) {
                case IP_DEST_NET_UNREACHABLE:
                case IP_DEST_HOST_UNREACHABLE:
                case IP_DEST_PROT_UNREACHABLE:
                case IP_DEST_PORT_UNREACHABLE:
                    cout << "Remote host may be down." << endl;
                    break;
                case IP_REQ_TIMED_OUT:
                    cout << "Request timed out." << endl;
                    break;
                case IP_TTL_EXPIRED_TRANSIT:
                    cout << "TTL expired in transit." << endl;
                    break;
                default:
                    cout << "Error code: " << pIpe->Status << endl;
                    break;
                }
            }
        }
    }
    GlobalFree(pIpe);
    IcmpCloseHandle(hIP);
    WSACleanup();
    if (MinMS < 0) MinMS = 0;
    unsigned char* pByte = (unsigned char*)pIpe->Address;
    cout << "���������� Ping " << (int)pByte[0] << "." << (int)pByte[1] << "." << (int)pByte[2] << "." << (int)pByte[3] << endl;
    cout << "\t�������: ���������� = " << RequestCount
        << ", �������� = " << RequestCount - LostPacketsCount
        << ", �������� = " << LostPacketsCount
        << "<" << (int)(100 / (float)RequestCount) * LostPacketsCount
        << " % ������>, " << endl;
    cout << "��������������� ����� ������-��������:" << endl
        << "����������� = " << MinMS << "��, ������������ = " << MaxMS
        << "��, ������� = " << (MaxMS + MinMS) / 2 << "��" << endl;
}
int main(int argc, char** argv) {
    setlocale(LC_ALL, "RUS");
    if (argc != 4) {
        cout << "�������������: " << argv[0] << " <IP_�����> <�����_��������_��> <����������_��������>" << endl;
        return 1;
    }

    string ip_address = argv[1];
    unsigned int timeout = atoi(argv[2]);
    unsigned int request_count = atoi(argv[3]);

    Ping(ip_address, timeout, request_count);
    _getch();
    return 0;
}