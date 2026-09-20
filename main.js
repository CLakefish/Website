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


/* Theme */

const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

function GetCurrentThemeSetting() {
    const stored = localStorage.getItem("theme");
    if (stored !== null) return stored;
    return systemSettingDark.matches ? "dark" : "light";
}

function ApplyTheme(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    document.documentElement.setAttribute("data-theme", theme);
    if (darkModeToggle) darkModeToggle.checked = (theme === "dark");
}

function ToggleDarkMode(toggle) {
    const theme = toggle.checked ? "dark" : "light";
    localStorage.setItem("theme", theme);
    ApplyTheme(theme);
}

ApplyTheme(GetCurrentThemeSetting());

/* Greeting */

function GetGreeting() {
    const el = document.getElementById("greetingID");
    if (!el) return;

    const hour = new Date().getHours();
    let greeting = "buh";
    
    if (hour < 12)      greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    else                greeting = "Good evening!";

    el.innerText = greeting;
}

GetGreeting();

const lightbox = document.getElementById("lightbox");

if (lightbox) {
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");

    document.querySelectorAll(".galleryImg").forEach((img) => {
        img.setAttribute("tabindex", "0");

        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = img.alt;
            lightbox.showModal();
        });

        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter") img.click();
        });
    });

    lightbox.addEventListener("click", () => lightbox.close());
}

/* 
window.addEventListener("pagereveal", (e) => {
    e.viewTransition?.ready.catch(() => {});
});

window.addEventListener("pageswap", (e) => {
    e.viewTransition?.finished.catch(() => {});
});

document.querySelectorAll(".headerButton").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.dataset.id === "active") e.preventDefault();
  });
}); */