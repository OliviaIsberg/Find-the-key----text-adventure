let elementText = document.getElementById('text');

let elementButton = document.getElementsByName('optionButton');

let elementSubText = document.getElementById('subText');

let elementHeadingText = document.getElementById('headingText');

function displayRoom (room) {
    elementText.innerText = room.elementText;
    elementSubText.innerText = room.elementSubText;
    elementHeadingText.innerText = room.elementHeadingText;


    let i = 0;

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

// function enterName () {
//     let name = document.createElement('input');
   
// };



let rooms = [
    {
        elementHeadingText: 'Welcome to the castle',
        elementText: 'Your misson is to open up a coffin that you will find in one of \n the rooms and you also need to find the key to open up the coffin',
        elementSubText: 'Enter your name: ',
        buttons: [
            {
                'textNode': 'Start game',
                'func': function () {displayRoom(rooms[1])}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room number 2',
        elementText: 'Explore the castle by choosing a room to enter',
        elementSubText: '',
        buttons: [
            {
                'textNode': 'Gå tillbaka till rum 1',
                'func': function () {displayRoom(rooms[0])}
            },
            {
                'textNode': 'Gå till vänster om dig till rum 3',
                'func': function () {displayRoom(rooms[2])}
            },
            {
                'textNode': 'Gå rakt fram till rum 5',
                'func': function () {displayRoom(rooms[4]);}
            },
            {
                'textNode': 'Gå till höger om dig till rum 4',
                'func': function () {displayRoom(rooms[3]);}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room 3',
        elementText: 'Welcome to room 3',
        elementSubText: 'Start by clicking the button',
        buttons: [
            {
                'textNode': 'Utforska kistan',
                'func': function () {displayRoom(rooms[2]);}
            }

        ]
    },
    {
        elementHeadingText: 'Welcome to room 4',
        elementText: 'Welcome to room 4',
        elementSubText: 'Start by clicking the button',
        buttons: [
            {
                'textNode': 'There is no key here you stupid',
                'func': function () {displayRoom(rooms[3]);}
            },
            {
                'textNode': 'Go back to where you came from idiot',
                'func': function () {displayRoom(rooms[1]);}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room 5',
        elementText: 'Welcome to room 5',
        elementSubText: 'Start by clicking the button',
        buttons: [
            {
                'textNode': 'Do you want to pick up the key?',
                'func': function () {displayRoom(rooms[4]);}
            }
        ]
    }
];

displayRoom(rooms[0]);