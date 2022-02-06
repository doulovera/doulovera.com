import './styles/style.css';
import './styles/header.css';
import './styles/about-me.css';

const app = document.querySelector('#app');

// toggle dark/light mode
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleClass(toggleThemeBtn, document.body, 'light-theme');

// open navbar on mobile
const openHeaderBtn = document.querySelector('.header-open_nav');
const header = document.querySelector('.header-container');
toggleClass(openHeaderBtn, header, 'header-open');



function toggleClass (element, toggledElement, className) {
  return element.addEventListener('click', () => {
    toggledElement.classList.toggle(className);
  });
};