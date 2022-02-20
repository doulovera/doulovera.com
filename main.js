import './styles/style.css';
import './styles/icons.css';
import './styles/header.css';
import './styles/main-card.css';
import './styles/about-me.css';
import './styles/projects.css';
import './styles/certificates.css';
import './styles/experience.css';
import './styles/footer.css';

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
