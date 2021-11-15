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
    elementHeadingText.innerText = room.header;
    elementText.innerText = room.text;
    elementSubText.innerText = room.subText;

    for(i = 0; i < room.buttons.length; i++) {
        elementButton[i].innerText = room.buttons[i].text;
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
        header: 'Welcome to the castle',
        text: 'Now you can start exploring the castle!',
        subText: '',
        buttons: [
            {
                'text': 'Go into the hallway',
                'action': function() {displayRoom(screens[1])}
            },
        ]
    },
    {
        header: 'Welcome to room number 2',
        text: 'Explore the castle by choosing a room to enter',
        subText: '',
        buttons: [
            {
                'text': 'Go back to first room',
                'action': function() {displayRoom(screens[0])}
            },
            {
                'text': 'Go to your left into room number three',
                'action': function() {displayRoom(screens[2])}
            },
            {
                'text': 'Go straight ahead into room number five',
                'action': function() {displayRoom(screens[4]);}
            },
            {
                'text': 'Go to your right into room number four',
                'action': function() {displayRoom(screens[3]);}
            }
        ]
    },
    {
        header: 'Welcome to room three',
        text: 'You found the chest!',
        subText: '',
        buttons: [
            {
                'text': 'Open the chest',
                'action': function() {displayRoom(screens[1]);}
            },
            {
                'text': 'Go back and choose another room',
                'action': function() {displayRoom(screens[1]);}
            }

        ]
    },
    {
        header: 'Welcome to room four',
        text: 'There is no key in this room',
        subText: 'Click the button to choose another room',
        buttons: [
            {
                'text': 'Click me',
                'action': function() {displayRoom(screens[1]);}
            }
        ]
    },
    {
        header: 'Welcome to room five',
        text: 'You found the key!',
        subText: 'Do you want to pick up the key?',
        buttons: [
            {
                'text': 'Yes',
                'isVisible': function() {return state.haveKey === false},
                'action': function() {state.haveKey = true; displayRoom(screens[2]);}
            },
            {
                'text': 'No',
                'action': function() {displayRoom(screens[1]);}
            }
        ]
    }
  
];

//funktion där man skriver sitt namn och namnet visas på skärmen
// funktionen tar även bort inputfält när knapp är tryckt


