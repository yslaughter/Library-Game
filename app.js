console.log('Here');

console.log();


// This is the dataset that will be inserted in to the game. Used bracket and dot notation to grab or pull items from my object.

var gameData = {
    welcome: {
        msg: 'Welcome to the Library!',
        img: 'media/building.jpg',
        buttons: [
            {
                text: 'Start',
                next: 'Next'
            }
        ]
    },
    intro: {
        msg: 'You have decided to spend the day and your local public library!  What do you want to do? Do you want to listen to the librarian read you a story or do you want to use the computer to play games and listen to stories on your own?',
        img: 'media/storytime.jpg',
        buttons: [
            {
                text: 'Listen to the librarian',
                next: 'Go to the computer and play some games',
            },
        ]
    },
    
    librarian: {
        msg: 'You get bored and fall asleep, and since that is not allowed - you are asked to leave ---  GAME OVER!!',
        img: 'media/gameover.jpg',
    },


    computers: {
        msg: 'The library has a section of computers loaded with stories and games. You can make a reservation onsite to use a computer.',
        img: 'media/compu.jpg',
        buttons: [
            {
                text: 'Play games or listen to stories.',
                next: 'Find the legos and buid a project'
            },
        ]
    },
    legos: {
        msg: 'You want to build something using legos go to the area of the childrens department where the legos are kept. Decide what you would like to build and you are on your way!',
        img: 'media/legos.jpg',
        buttons: [
            {
                text: 'Find the legos and build a project',
                next: 'Spend some time working on your homework'
            },
            
        ]
    },
    homework: {
        msg: 'You have an assignment and need help working through it! Libraries are fantastic sources of facts for homework projects, and most have good stocks of children’s information books – and space to sit and study. Many also have an online reference library that you can use at home, giving your child access to a large and reliable body of information',
        img: 'media/homework.jpg',
        buttons: [
            {
                text: 'Work on your homework',
                next: 'Read a book for pleasure'
            }
        ]
    }, 
    books: {
        msg: 'If you want to check out a book to take home and read you must go to the card catalog to locate where it is in the library! Then you must take it to the circulation desk for ',
        img: 'media/cardcatalog.jpg',
        buttons: [
            {
                text: 'Choose a book to read',
                next: 'Find a quiet place to study'
            }
        ]
    },
    study: {
        msg: 'If you need a quiet place to study or read ask the librarian to assign you a study room!',
        img: 'media/studyroom.jpg',
        buttons: [
            {
                text: 'Find a quiet place to study',
                next: 'Choose a board game to play with your friends'
            }
        ]
    },
    boardgames:{
        msg: 'If you would like to play a board game find the games and select the one you would like to play! A  great way to get those who’d usually spend an entire weekend playing video games out of the house and enjoying some face-to-face contact with other children. Some focus particularly on chess, while others offer a selection of board games to help your child pass the time and meet new people.',

        
        img: 'media/boardgames.jpg',
        buttons: [
            {
                text: 'Choose a board game to play with your friends',
                next: 'Join the chess club and play in a competition'
            }
        ]
    },
    chess:{
        msg: 'The library library sometimes has clubs in which you may participate. Chess is one of those clubs that may be available at your library.  Ask the librarian if they have one and how you can join!',
        img: 'media/chess.jpg',
        buttons:[
            {
                text: 'Decide whether you would like to participate in the chess club',
                next: 'Find your parent in the coffee shop and prepare to go home'
            }
        ]
    },
    coffeeshop:{
        msg: 'Getting people into the library is one of the keys to funding: if libraries can illustrate their active value to the community, they can easily make a case against budget cuts, or even for additional funding for new projects. Coffee shops have incentive to entice patrons as well. Apps reward regular customers, live music keeps them entertained, and some even offer community classes on a variety of topics and other ways for their patrons to interact and engage.',

        
        img: 'media/coffeeshop.jpg',
        buttons: [
            {
                text: 'Back',
                next: 'Next'
            }
        ]
    }         
}
// Declaring variables

let screen = document.getElementById("game");
let gameText = document.getElementById("gameText");
let start = document.getElementById("start");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

// Inserting paragraph and two buttons using text from the object. Then changing the color of the text. Used the '+' concatinator to join html and javascript.

function welcome(){
    gameText.innerHTML = "<p>" + gameData.welcome.msg + "</p> <button id = 'button1'>" + gameData.welcome.buttons[0].text + "</button> <button onclick = 'intro();' id = 'button2'>" + gameData.welcome.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.welcome.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function intro(){
    gameText.innerHTML = "<p>" + gameData.intro.msg + "</p> <button onclick = 'librarian();' id = 'button1'>" + gameData.intro.buttons[0].text + "</button> <button onclick = 'computers();' id = 'button2'>" + gameData.intro.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.intro.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function librarian(){
    gameText.innerHTML = "<p>" + gameData.librarian.msg + "</p>"
    screen.style.backgroundImage = "url(" + gameData.librarian.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}
function computers(){
    gameText.innerHTML = "<p>" + gameData.computers.msg + "</p> <button onclick = 'intro();' id = 'button1'>" + gameData.computers.buttons[0].text + "</button> <button onclick = 'legos();' id = 'button2'>" + gameData.computers.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.computers.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function legos(){
    gameText.innerHTML = "<p>" + gameData.legos.msg + "</p> <button onclick = 'computers();' id = 'button1'>" + gameData.legos.buttons[0].text + "</button> <button onclick = 'homework();' id = 'button2'>" + gameData.legos.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.legos.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function homework(){
    gameText.innerHTML = "<p>" + gameData.homework.msg + "</p> <button onclick = 'legos();'id = 'button1'>" + gameData.homework.buttons[0].text + "</button> <button onclick = 'books();' id = 'button2'>" + gameData.homework.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.homework.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function books(){
    gameText.innerHTML = "<p>" + gameData.books.msg + "</p> <button onclick = 'homework();' id = 'button1'>" + gameData.books.buttons[0].text + "</button> <button onclick = 'study();' id = 'button2'>" + gameData.books.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.books.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function study(){
    gameText.innerHTML = "<p>" + gameData.study.msg + "</p> <button onclick = 'books();'id = 'button1'>" + gameData.study.buttons[0].text + "</button> <button onclick = 'boardgames();' id = 'button2'>" + gameData.study.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.study.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function boardgames(){
    gameText.innerHTML = "<p>" + gameData.boardgames.msg + "</p> <button onclick = 'study();'id = 'button1'>" + gameData.boardgames.buttons[0].text + "</button> <button onclick = 'chess();' id = 'button2'>" + gameData.boardgames.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.boardgames.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function chess(){
    gameText.innerHTML = "<p>" + gameData.chess.msg + "</p> <button onclick = 'boardgames();'id = 'button1'>" + gameData.chess.buttons[0].text + "</button> <button onclick = 'coffeeshop();' id = 'button2'>" + gameData.chess.buttons[0].next + "</button>"
    screen.style.backgroundImage = "url(" + gameData.chess.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}

function coffeeshop(){
    gameText.innerHTML = "<p>" + gameData.coffeeshop.msg + "</p> <button onclick = 'chess();'id = 'button1'>" + gameData.coffeeshop.buttons[0].text + "</button>"
    screen.style.backgroundImage = "url(" + gameData.coffeeshop.img +")";
    screen.style.color="#ccc";
    
    console.log('made it');
}


// start.addEventListener('click', welcome);

// function changeText2(){
    // gameText.textContent="The game is over";
    // console.log('made it');
// }





welcome();


var scavengerhunt = [1,2,3]
var heart = {
    first:"one", 
    2:"two",
    3:"three"
}

console.log(scavengerhunt[0]);

console.log(heart["first"]);

console.log(heart.first);