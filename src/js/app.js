// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const navbar = elQS('#navbar');
const navbarNav = elQS('#navbar-nav');
const navToggler = elQS('#nav-toggler');
const prev = elQS('.carousel-control-prev');
const next = elQS('.carousel-control-next');
const indicators = elQSA('.indicator');
let indicatorIdx = 0;
let indicatorLength = 5;

// functions
function navTogglerEvent() {
    navbar.classList.toggle('toggle');
}

function prevNextEvent(e) {
    if (this.dataset.slide == 'prev') {
        indicatorIdx--;
        if (indicatorIdx < 0) {
            indicatorIdx = indicatorLength - 1;
        }
    } else if (this.dataset.slide == 'next') {
        indicatorIdx++;
        if (indicatorIdx >= indicatorLength) {
            indicatorIdx = 0;
        }
    }
    slide()
}

function slide() {
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    })
    indicators[indicatorIdx].classList.add('active');
}

// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    on(navToggler, 'click', navTogglerEvent);
    on(prev, 'click', prevNextEvent);
    on(next, 'click', prevNextEvent)
}