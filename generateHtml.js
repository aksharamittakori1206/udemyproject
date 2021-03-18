var wrapper = document.createElement('div');
var header = document.createElement('header');
var form1 = document.createElement('form');

function addNoteHeaderAndNoteButton() {
    return new Promise(async (resolve, reject) => {
        wrapper.setAttribute('class', 'wrapper');
        document.body.appendChild(wrapper);
        wrapper.appendChild(header);

        form1.setAttribute('id', 'search-note');
        var h2 = document.createElement('h2');
        h2.innerHTML = "Note Manager"
        header.appendChild(h2);

        var addNotes = document.createElement('div');
        addNotes.setAttribute('id', 'add-notes');

        var form = document.createElement('form');
        form.setAttribute('id', 'add');

        var input5 = document.createElement('input');
        input5.setAttribute('type', 'text');
        input5.setAttribute('id', 'add-input');
        input5.setAttribute('placeholder', 'Add a note')

        var input6 = document.createElement('input');
        input6.setAttribute('type', 'submit');
        input6.setAttribute('value', 'Add');
        input6.setAttribute('id', 'add-btn');
        input6.setAttribute('class', 'add-btn');

        var input7 = document.createElement('input');
        input7.setAttribute('type', 'submit');
        input7.setAttribute('value', 'logout');
        input7.setAttribute('id', 'logout-btn');
        input7.setAttribute('class', 'logout-btn');

        wrapper.appendChild(addNotes);
        addNotes.appendChild(form);
        form.appendChild(input5);
        form.appendChild(input6);
        form.appendChild(input7);

        resolve();
    });
}

function addEditDelete4Note() {
    return new Promise(async (resolve, reject) => {
        var input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.setAttribute('placeholder', 'Search note.....')

        header.appendChild(form1);
        form1.appendChild(input2);

        var noteList = document.createElement('div');
        noteList.setAttribute('class', 'note-list');
        var ul = document.createElement('ul');
        ul.setAttribute('id', 'list');

        wrapper.appendChild(noteList);
        noteList.appendChild(ul);

        var hideList = document.createElement('div');
        hideList.setAttribute('id', 'hide-list');

        var label = document.createElement('label');
        label.setAttribute('for', 'hide');
        label.innerHTML = "Hide notes";

        var input3 = document.createElement('input')
        input3.setAttribute('type', 'checkbox');
        input3.setAttribute('id', 'hide');

        wrapper.appendChild(hideList);
        hideList.appendChild(label);
        hideList.appendChild(input3);
        resolve();
    });
}

// function addElements5() {
//     return new Promise(async (resolve, reject) => {
//         var addNotes = document.createElement('div');
//         addNotes.setAttribute('id', 'add-notes');

//         var form = document.createElement('form');
//         form.setAttribute('id', 'add');

//         var input5 = document.createElement('input');
//         input5.setAttribute('type', 'text');
//         input5.setAttribute('id', 'add-input');
//         input5.setAttribute('placeholder', 'Add a note')

//         var input6 = document.createElement('input');
//         input6.setAttribute('type', 'submit');
//         input6.setAttribute('value', 'Add');
//         input6.setAttribute('id', 'add-btn');
//         input6.setAttribute('class', 'add-btn');

//         var input7 = document.createElement('input');
//         input7.setAttribute('type', 'submit');
//         input7.setAttribute('value', 'logout');
//         input7.setAttribute('id', 'logout-btn');
//         input7.setAttribute('class', 'logout-btn');

//         wrapper.appendChild(addNotes);
//         addNotes.appendChild(form);
//         form.appendChild(input5);
//         form.appendChild(input6);
//         form.appendChild(input7);
//         resolve();
//     });
// }
/********Login********/

function loginPage() {
    return new Promise(async (resolve, reject) => {
        var landingPage = document.createElement('div');
        landingPage.setAttribute('class', 'landing-page');
        landingPage.setAttribute('id', 'landingPage');

        var h1 = document.createElement('h1');
        h1.setAttribute('id', 'h1')
        h1.innerHTML = "Login";

        var landingInput = document.createElement('div');
        landingInput.setAttribute('class', 'landing-input');
        landingInput.setAttribute('id', 'landingInput');

        var label1 = document.createElement('label');
        label1.setAttribute('id', 'label1')
        label1.setAttribute('class', 'tooltip');
        label1.innerHTML = "Username";

        var span = document.createElement('span')
        span.setAttribute('class', 'tooltiptext')
        span.innerHTML = "Username"

        var input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'firstname');
        input1.setAttribute('placeholder', 'Enter your Username');

        var label2 = document.createElement('label');
        label2.setAttribute('id', 'label2');
        label2.setAttribute('class', 'tooltip');
        label2.innerHTML = "Password ";

        var span2 = document.createElement('span')
        span2.setAttribute('class', 'tooltiptext')
        span2.innerHTML = "Password"

        var input0 = document.createElement('input');
        input0.setAttribute('type', 'text');
        input0.setAttribute('id', 'lastname');
        input0.setAttribute('placeholder', 'Enter your Password');

        var br = document.createElement('br')

        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        button.setAttribute('value', 'Login');
        button.setAttribute('id', 'btn');

        document.body.appendChild(landingPage);
        landingPage.appendChild(h1);
        landingPage.appendChild(landingInput);
        landingInput.appendChild(label1);
        label1.appendChild(span)
        landingInput.appendChild(input1);
        landingInput.appendChild(br);

        landingInput.appendChild(label2);
        label2.appendChild(span2);
        landingInput.appendChild(input0);
        landingInput.appendChild(button);

        resolve();
    });
}

function btnDisplayPage() {
    return new Promise(async (resolve, reject) => {
        var display = document.createElement('div');
        display.setAttribute('class', 'landing-page');
        display.setAttribute('id', 'display')

        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        button.setAttribute('value', 'Add Note');
        button.setAttribute('id', 'display-btn');

        document.body.appendChild(display);
        display.appendChild(button);

        resolve();
    });
}











