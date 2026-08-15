/* Dyslexia Font Toggle*/

const toggle = document.getElementById('fontToggle');
const body   = document.body;

if (localStorage.getItem('dyslexiaMode') === 'enabled') {
    body.classList.add('dyslexiaFont');
    toggle.checked = true;
}

function ToggleDyslexiaFont(toggle) {
    const body = document.body;

    if (toggle.checked) {
        body.classList.add('dyslexiaFont');
        localStorage.setItem('dyslexiaMode', 'enabled');
    }
    else {
        body.classList.remove('dyslexiaFont');
        localStorage.setItem('dyslexiaMode', 'disabled');
    }
}