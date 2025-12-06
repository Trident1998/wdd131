document.addEventListener('DOMContentLoaded', () => {
  fetchWeather();

  loadLatestStory();

  loadCarousel();

  initHeroSlider();
});

async function fetchWeather() {
  const weatherContainer = document.getElementById('weather-widget');
  try {
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=48.3554&longitude=24.4129&current_weather=true&windspeed_unit=kmh'
    );
    const data = await response.json();

    const temp = data.current_weather.temperature;
    const wind = data.current_weather.windspeed;
    const code = data.current_weather.weathercode;

    let condition = 'Clear';
    let icon = '☀️';
    if (code > 0 && code <= 3) {
      condition = 'Cloudy';
      icon = '☁️';
    } else if (code >= 45 && code <= 48) {
      condition = 'Foggy';
      icon = '🌫️';
    } else if (code >= 51 && code <= 67) {
      condition = 'Rain';
      icon = '🌧️';
    } else if (code >= 71) {
      condition = 'Snow';
      icon = '❄️';
    }

    weatherContainer.innerHTML = `
                    <div class="weather-info">
                        <div class="weather-icon">${icon}</div>
                        <div class="weather-details">
                            <h3>${temp}°C</h3>
                            <p>${condition}</p>
                            <small>Wind: ${wind} km/h</small>
                        </div>
                    </div>
                `;
  } catch (error) {
    weatherContainer.innerHTML = `<p>Failed to load weather.</p>`;
    console.error('Weather error:', error);
  }
}

function loadLatestStory() {
  const stories = getStories();
  const latestContainer = document.getElementById('latest-story');
  if (stories.length > 0) {
    const last = stories[stories.length - 1];
    latestContainer.innerHTML = `
                    <h3>${last.title}</h3>
                    <small>By: ${last.author} | Date: ${last.date}</small>
                    <p>${last.text.substring(0, 150)}...</p>
                `;
  } else {
    latestContainer.innerHTML = '<p>No stories yet.</p>';
  }
}

function loadCarousel() {
  const images = getImages().slice(0, 7);
  const carousel = document.getElementById('home-carousel');

  images.forEach((img) => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
    carousel.appendChild(div);
  });

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  const slideInterval = 5000;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, slideInterval);
}
