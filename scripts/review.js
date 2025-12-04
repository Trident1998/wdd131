let numReviews = Number(window.localStorage.getItem('reviews-ls')) || 0;

numReviews++;

window.localStorage.setItem('reviews-ls', numReviews);

document.getElementById('reviewCounter').textContent = numReviews;
