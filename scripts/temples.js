document.addEventListener('DOMContentLoaded', () => {
  try {
    const menuButton = document.querySelector('#menuButton');
    const nav = document.querySelector('nav');
    const title = document.querySelector('.title');
    const header = document.querySelector('header');

    menuButton.textContent = '≡';

    menuButton.addEventListener('click', () => {
      nav.classList.toggle('open');
      title.classList.toggle('open');
      header.classList.toggle('open');

      if (nav.classList.contains('open')) {
        menuButton.textContent = '✕';
      } else {
        menuButton.textContent = '≡';
      }
    });
  } catch (e) {
    console.error('Error setting up hamburger menu:', e);
  }
});
