import './styles/style.css';
import './styles/header.css';

const app = document.querySelector('#app');

// toggle dark/light mode
const toggleThemeBtn = document.getElementById('toggle-theme');
// open navbar on mobile
const openHeaderBtn = document.querySelector('.header-open_nav');
const header = document.querySelector('.header-container');

const toggleClass = (element, toggledElement, className) => {
  return element.addEventListener('click', () => {
    toggledElement.classList.toggle(className);
  });
};

toggleClass(toggleThemeBtn, document.body, 'light-theme');
toggleClass(openHeaderBtn, header, 'header-open');
