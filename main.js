//Hämtar ut element ifrån dom
let elementText = document.getElementById('text');
let elementButton = document.getElementsByName('optionButton');
let elementSubText = document.getElementById('subText');
let elementHeadingText = document.getElementById('headingText');
let nameInput = document.getElementById('nameInput');
let submitName = document.getElementById('submit');
let nameOutput = document.getElementById('nameOutput');
let startButton = document.getElementById('start');

let state = {
    name: null,
    haveKey: false
};

submitName.addEventListener('click', function() {
    state.name = nameInput.value;

    nameInput.style.display = 'none';
    submitName.style.display = 'none';
    startButton.classList.toggle('visible', true)

    elementSubText.innerText = "Welcome to the game";
    nameOutput.innerText = state.name;
});

startButton.addEventListener('click', function() {
    startButton.classList.toggle('visible', false);
    nameOutput.style.display = 'none';

    displayRoom(screens[0]);
});

function displayRoom (room) {
    elementText.innerText = room.elementText;
    elementSubText.innerText = room.elementSubText;
    elementHeadingText.innerText = room.elementHeadingText;

    for(i = 0; i < room.buttons.length; i++) {
        elementButton[i].innerText = room.buttons[i].textNode;
        elementButton[i].onclick = room.buttons[i].action;
        elementButton[i].classList.toggle('visible', true);
    }

    for(i = i; i < elementButton.length; i++) {
        elementButton[i].classList.toggle('visible', false);
        elementButton[i].onclick = null;
    }
}

let screen = [
    {
        elementHeadingText: 'Welcome to the castle',
        elementText: 'Now you can start exploring the castle!',
        elementSubText: '',
        buttons: [
            {
                'textNode': 'Go into the hallway',
                'action': function() {displayRoom(screens[1])}
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
                'action': function() {displayRoom(screens[0])}
            },
            {
                'textNode': 'Go to your left into room number three',
                'action': function() {displayRoom(screens[2])}
            },
            {
                'textNode': 'Go straight ahead into room number five',
                'action': function() {displayRoom(screens[4]);}
            },
            {
                'textNode': 'Go to your right into room number four',
                'action': function() {displayRoom(screens[3]);}
            }
        ]
    },
    {
        elementHeadingText: 'Welcome to room three',
        elementText: 'You found the chest!',
        elementSubText: '',
        buttons: [
            {
                'textNode': 'Open the chest',
                'action': function() {displayRoom(screens[1]);}
            },
            {
                'textNode': 'Go back and choose another room',
                'action': function() {displayRoom(screens[1]);}
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
                'action': function() {displayRoom(screens[1]);}
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
                'isVisible': function() {return state.haveKey === false},
                'action': function() {state.haveKey = true; displayRoom(screens[2]);}
            },
            {
                'textNode': 'No',
                'action': function() {displayRoom(screens[1]);}
            }
        ]
    }
  
];

//funktion där man skriver sitt namn och namnet visas på skärmen
// funktionen tar även bort inputfält när knapp är tryckt


