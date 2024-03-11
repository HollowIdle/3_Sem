#include <iostream>
using namespace std;

void hanoi(int i,int k, int n)
{
	if (n == 1) {
		cout << "����������� ���� ����� 1 �� �������� " << k <<endl;
	}
	else {
		int tmp = 6 - i - k;
		hanoi(i, tmp, n - 1);
		cout << "����������� ���� " << n << " �� ������� " << i << " �� �������� " << k << endl;
		hanoi(tmp, k, n - 1);

	}
}

int main()
{
	setlocale(LC_CTYPE, "Rus");
	hanoi(1, 3, 4);
	return 0;
}