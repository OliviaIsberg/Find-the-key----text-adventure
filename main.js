//Hämtar ut element ifrån dom
let elementText = document.getElementById('text');

let elementButton = document.getElementsByName('optionButton');

let elementSubText = document.getElementById('subText');

let elementHeadingText = document.getElementById('headingText');

function displayRoom (room) {
    elementText.innerText = room.elementText;
    elementSubText.innerText = room.elementSubText;
    elementHeadingText.innerText = room.elementHeadingText;

    for(i = 0; i < room.buttons.length; i++) {
        elementButton[i].innerText = room.buttons[i].textNode;
        elementButton[i].onclick = room.buttons[i].func;
        elementButton[i].style.display = '';
    }

    for(i = i; i < elementButton.length; i++) {
        elementButton[i].style.display = 'none';
        elementButton[i].onclick = null;
    }

    if (elementSubText < elementSubText.length) {
        elementSubText == null;

    } else {
        elementSubText.display = 'none';
    }

};

//funktion där man skriver sitt namn och namnet visas på skärmen
// funktionen tar även bort inputfält när knapp är tryckt


 



// function enterName() {
//     let nameInput = document.getElementById('nameInput').value;
//     let nameOutput =  document.getElementById('welcomeName').innerHTML = nameInput;

// }

// enterName()



let rooms = [
    {
        elementHeadingText: 'Welcome to the castle',
        elementText: 'Your misson is to open up a coffin that you will find in one of \n the rooms and you also need to find the key to open up the coffin',
        elementSubText: 'Enter your name: ',
        buttons: [
            {
                'textNode': 'Submit',
                'func': function () {name(rooms[1])}
            },
        ]
    },
    {
        elementHeadingText: 'Welcome to the castle',
        elementText: 'Your misson is to open up a coffin that you will find in one of \n the rooms and you also need to find the key to open up the coffin',
        elementSubText: 'Enter your name: ',
        buttons: [
            {
                'textNode': 'Startgame',
                'func': function () {displayRoom(rooms[2])}
            },
        ]
    },
    {
        elementHeadingText: 'Welcome to room number 2',
        elementText: 'Explore the castle by choosing a room to enter',
        elementSubText: '',
        buttons: [
            {
                'textNode': 'Go back to first room',
                'func': function () {displayRoom(rooms[1])}
            },
            {
                'textNode': 'Go to your left into room number three',
                'func': function () {displayRoom(rooms[3])}
            },
            {
                'textNode': 'Go straight ahead into room number five',
                'func': function () {displayRoom(rooms[5]);}
            },
            {
                'textNode': 'Go to your right into room number four',
                'func': function () {displayRoom(rooms[4]);}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room three',
        elementText: 'You found the coffin!',
        elementSubText: '',
        buttons: [
            {
                'textNode': 'Open coffin',
                'func': function () {displayRoom(rooms[3]);}
            },
            {
                'textNode': 'Go back and choose another room',
                'func': function () {displayRoom(rooms[2]);}
            }

        ]
    },
    {
        elementHeadingText: 'Welcome to room four',
        elementText: 'There is no key in this room',
        elementSubText: 'Click the button to choose another room',
        buttons: [
            {
                'textNode': 'Click me',
                'func': function () {displayRoom(rooms[2]);}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room five',
        elementText: 'You found the key!',
        elementSubText: 'Do you want to pick up the key?',
        buttons: [
            {
                'textNode': 'Yes',
                'func': function () {displayRoom(rooms[3]);}
            },
            {
                'textNode': 'No',
                'func': function () {displayRoom(rooms[2]);}
            }
        ]
    }
  
];

function name (room) {
    let nameInput = document.getElementById('nameInput').value;
    let nameOutput = document.getElementById('nameOutput').innerText = nameInput;
    let removeNameInput = document.getElementById('nameInput').remove();
    elementSubText.innerText = "Welcome to the game";

    for(i = 0; i < room.buttons.length; i++) {
        elementButton[i].innerText = room.buttons[i].textNode;
        elementButton[i].onclick = room.buttons[i].func;
        // elementButton[i].innerText = 'startgame'
    }

    for(i = i; i < elementButton.length; i++) {
        elementButton[i].style.display = 'none';
        elementButton[i].onclick = null;
    }
}; 

displayRoom(rooms[0]);