console.log("Задание 1");


let numbers = [1,2,3,4,5];
let [y] = numbers;
console.log(y);


console.log("Задание 2");


let user = {
    name : "Angel",
    age : 18
}
let admin = {
    role : "admin",
    password : "adminPassword",
    ...user
}
console.log(admin);


console.log("Задание 3");


let store = {
    state: { // 1 уровень
        profilePage: { // 2 уровень
            posts: [ // 3 уровень
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Valeria'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}
let {
    state :{
        profilePage :{
            posts: [
                post1,
                post2,
            ],
            newPostText,
        },
        dialogPage: {
            dialogs: [
                dialog1,
                dialog2,
                dialog3,
                dialog4,
            ],
            messages: [
                message1,
                message2,
                message3,
            ],
        sidebar,
        },
    },
} = store;

console.log(post1.likesCount);
console.log(post2.likesCount);

dialogsMassive = [dialog1,dialog2,dialog3,dialog4];
filteredDialogsMassive = [];
let i = 0;
dialogsMassive.forEach((dialog) =>
{
    if(dialog.id % 2 === 0)
{
    filteredDialogsMassive[i] = dialog;
    i++;
}
});
for(let j = 0 ;j < filteredDialogsMassive.length;j++){
    console.log(filteredDialogsMassive[j]);
}

messagesMassive = [message1,message2,message3];
messagesMassive.map((messageWindow )=>
{ messageWindow.message = "Hello user"} );

for(let j = 0 ;j < messagesMassive.length;j++){
    console.log(messagesMassive[j]);
}


console.log("Задание 4");


let task = [{id: 6, tile: "Lab06", isDone: true}];
let tasks = [
    {id: 1, title : "HTML&CSS", isDone: true},
    {id: 2, title : "JS", isDone: true},
    {id: 3, title : "ReactJS", isDone: false},
    {id: 4, title : "Rest API", isDone: false},
    {id: 5, title : "GraphQL", isDone: false},
    ...task,
];
console.log(tasks);


console.log("Задание 5");


let numbersFifth = [1,2,3];

let result = sumValues(...numbersFifth);

console.log(result);

function sumValues(x,y,z){
    return x + y + z;
}










