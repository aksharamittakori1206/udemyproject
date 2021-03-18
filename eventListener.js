var clicked = 0
var click = 0

function eventListenerForLogin() {
        addListener('btn')
        if (document.getElementById('firstname').value == 'Akshara' && document.getElementById('lastname').value == 'Mittakori') {
            purgeUI4ChildrenElements('landingInput');
            purgeUI4ChildrenElements('landingPage');
            display();
        }
}

function eventListenerForDisplay() {
    document.getElementById('display-btn').addEventListener('click', function (e) {
        e.preventDefault();
        click++;
        if (click == 1) {
            document.getElementById('display').style.display = 'none';
            addNoteHeaderAndNoteButton();
            addListener2Display('add-btn')
        }

    })
}

function addListener2Display(UIElement) {
    var anw;
    anw = document.getElementById(UIElement);
    anw.addEventListener('click', mouseClicked, false);
};

async function mouseClicked(e) {
    e.preventDefault();
    clicked++;
    if (clicked == 1) {
        await addEditDelete4Note();
        await addFunctionalities();
    }
};

function addListener(UIElement) {
    var anw;
    anw = document.getElementById(UIElement);
    anw.addEventListener('click', addFunctionalities, false);
    anw.addEventListener('click', eventListenerForLogin, false);
};
