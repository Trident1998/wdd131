document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
});

function filterGallery(season, btnElement) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach((btn) => btn.classList.remove('active'));
  btnElement.classList.add('active');

  renderGallery(season);
}

function renderGallery(season) {
  const container = document.getElementById('gallery-grid');
  container.innerHTML = ''; 

  const allImages = getImages();

  const filtered =
    season === 'all'
      ? allImages
      : allImages.filter((img) => img.season === season);

  filtered.forEach((img) => {
    const card = document.createElement('figure');
    card.className = 'gallery-card';

    card.innerHTML = `
                    <div class="card-img-wrapper">
                        <img src="${img.src}" alt="${
      img.alt
    }" loading="lazy" width="400" height="250">
                    </div>
                    <figcaption>
                        <h3>${img.location}</h3>
                        <div class="card-data">
                            <span class="label">Date:</span> <span class="value">${
                              img.date
                            }</span>
                        </div>
                        <div class="card-data">
                            <span class="label">Season:</span> <span class="value">${
                              img.season === 'winter'
                                ? '❄️ Winter'
                                : '☀️ Summer'
                            }</span>
                        </div>
                        <div class="card-data">
                            <span class="label">Description:</span> <span class="value">${
                              img.alt
                            }</span>
                        </div>
                    </figcaption>
                `;
    container.appendChild(card);
  });
}
