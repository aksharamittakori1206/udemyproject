async function main() {
    userLogin();
}

async function userLogin() {
    await loginPage();
    eventListenerForLogin();
}

async function display() {
    await btnDisplayPage();
    eventListenerForDisplay();
}


function purgeUI4ChildrenElements(UIElement) {
    var el1 = document.getElementById(UIElement);
    if (el1) {
        while (el1.hasChildNodes()) {
            el1.removeChild(el1.lastChild);
        }
        el1.style.display = 'none';
    }
    else {
        return;
    }
};

