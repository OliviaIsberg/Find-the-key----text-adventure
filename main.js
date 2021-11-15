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

    displayScreen(screens[0]);
});

function displayScreen (screen) {
    elementHeadingText.innerText = screen.header;
    elementText.innerText = screen.text;
    elementSubText.innerText = screen.subText;

    let buttons = screen.buttons.filter((button) => !button.hasOwnProperty('isVisible') || (button.hasOwnProperty('isVisible') && button.isVisible()));

    console.log(screen);

    for(i = 0; i < buttons.length; i++) {
        elementButton[i].innerText = buttons[i].text;
        elementButton[i].onclick = buttons[i].action;
        elementButton[i].classList.toggle('visible', true);
    }

    for(i = i; i < elementButton.length; i++) {
        elementButton[i].classList.toggle('visible', false);
        elementButton[i].onclick = null;
    }
}

let screens = [
    {
        header: 'Welcome to the castle',
        text: 'Now you can start exploring the castle!',
        subText: '',
        buttons: [
            {
                'text': 'Go into the hallway',
                'action': function() {displayScreen(screens[1])}
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
                'action': function() {displayScreen(screens[0])}
            },
            {
                'text': 'Go to your left into room number three',
                'action': function() {displayScreen(screens[2])}
            },
            {
                'text': 'Go straight ahead into room number five',
                'action': function() {displayScreen(screens[4]);}
            },
            {
                'text': 'Go to your right into room number four',
                'action': function() {displayScreen(screens[3]);}
            }
        ]
    },
    { // gör om till fälla som dödar spelaren
        header: 'Welcome to room three',
        text: 'You\'ve been lured into a trap',
        subText: 'You\'ve been killed',
        buttons: [
            {
                'text': 'Restart the game',
                'action': function() {displayScreen(screens[0]);}
            }

        ]
    },
    {
        header: 'Welcome to room four',
        text: 'You found the chest!',
        subText: '',
        buttons: [
            {
                'text': 'Go back and choose another room',
                'action': function() {displayScreen(screens[1]);}
            },
            {
                'text': 'Open the chest',
                'action': function() {
                    if(state.haveKey) {
                        displayScreen(screens[7]);
                    } else {
                        displayScreen(screens[6]);
                    }
                }
            }

        ]
    },
    {
        header: 'Welcome to room five',
        text: 'It\'s just an empty room with a door in front of you and a door behind you',
        subText: 'Where do you want to go?',
        buttons: [
            {
                'text': 'Go to room 2',
                'action': function() {displayScreen(screens[1]);}
            },
            {
                'text': 'Go to room 6',
                'action': function() {displayScreen(screens[5]);}
            }
        ]
    },
    {
        header: 'Welcome to room six',
        text: 'Your in a small room but on the floor you see a key.',
        subText: 'What do you want to do?',
        buttons: [
            {
                'text': 'Pick up key',
                'isVisible': function() {return state.haveKey === false},
                'action': function() {state.haveKey = true; displayScreen(screens[5]);}
            },
            {
                'text': 'Go back to room 5',
                'action': function() {displayScreen(screens[4]);}
            }
        ]
    },
    {
        header: 'Welcome to room four',
        text: 'You try to open the chest but it is locked.',
        subText: '',
        buttons: [
            {
                'text': 'Go back and choose another room',
                'action': function() {displayScreen(screens[1]);}
            },
            {
                'text': 'Open the chest',
                'action': function() {displayScreen(screens[6]);}
            }
        ]
    },
    {
        header: 'You won!',
        text: 'You searched the castle, found the key and opened the treasure chest!',
        subText: 'Congratulations',
        buttons: []
    }
];

//funktion där man skriver sitt namn och namnet visas på skärmen
// funktionen tar även bort inputfält när knapp är tryckt


