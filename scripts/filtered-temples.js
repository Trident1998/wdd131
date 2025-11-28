const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Kyiv Ukraine',
    location: 'Kyiv, Ukraine',
    dedicated: '2007, June, 23',
    area: 22184,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/40bfa124e10210065021b4f3580e27d40e592021/full/500%2C/0/default',
  },
  {
    templeName: 'Laie Hawaii',
    location: 'Laie, Hawaii, United States',
    dedicated: '1919, November, 27',
    area: 42100,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/bcff33b8702e7490b7fb8d097a70859b4d6d14d0/full/500%2C/0/default',
  },
  {
    templeName: 'Houston Texas',
    location: 'Houston, Texas, United States',
    dedicated: '2000, December, 27',
    area: 33970,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/a39f94f26161c5ce5dac43b41bbdd896c055bd45/full/500%2C/0/default',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainTitle = document.querySelector('main h1');
  const menuButton = document.querySelector('#menuButton');
  const nav = document.querySelector('nav');
  const titleElement = document.querySelector('.title');
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a');

  function createTempleCard(temple) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const pLocation = document.createElement('p');
    const pDedicated = document.createElement('p');
    const pArea = document.createElement('p');
    const h3Name = document.createElement('h3');

    h3Name.textContent = temple.templeName;
    h3Name.style.fontSize = '1.2rem';
    h3Name.style.fontWeight = 'bold';

    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '300');
    img.setAttribute('height', '200');

    pLocation.innerHTML = `<b>Location:</b> ${temple.location}`;
    pDedicated.innerHTML = `<b>Dedicated:</b> ${temple.dedicated}`;
    pArea.innerHTML = `<b>Area:</b> ${temple.area.toLocaleString()} sq ft`;

    figcaption.innerHTML = '';
    figcaption.appendChild(h3Name);
    figcaption.appendChild(pLocation);
    figcaption.appendChild(pDedicated);
    figcaption.appendChild(pArea);

    figure.appendChild(img);
    figure.appendChild(figcaption);

    gallery.appendChild(figure);
  }

  function displayTemples(filteredTemples, title) {
    if (!gallery) {
      console.error('Gallery element not found!');
      return;
    }
    gallery.innerHTML = '';
    if (mainTitle) mainTitle.textContent = title;
    filteredTemples.forEach(createTempleCard);
  }

  if (menuButton) {
    menuButton.textContent = '≡';
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('open');
      titleElement.classList.toggle('open');
      header.classList.toggle('open');
      menuButton.textContent = nav.classList.contains('open') ? '✕' : '≡';
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = link.textContent;
      let filteredArray = [];
      let newTitle = 'Temples';

      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      switch (filter) {
        case 'Old':
          filteredArray = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900
          );
          newTitle = 'Old Temples (Dedicated Before 1900)';
          break;
        case 'New':
          filteredArray = temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000
          );
          newTitle = 'New Temples (Dedicated After 2000)';
          break;
        case 'Large':
          filteredArray = temples.filter((temple) => temple.area > 90000);
          newTitle = 'Large Temples (> 90,000 sq ft)';
          break;
        case 'Small':
          filteredArray = temples.filter((temple) => temple.area < 10000);
          newTitle = 'Small Temples (< 10,000 sq ft)';
          break;
        case 'Home':
        default:
          filteredArray = temples;
          newTitle = 'All Temples';
          break;
      }

      displayTemples(filteredArray, newTitle);
    });
  });

  displayTemples(temples, 'All Temples');
});
