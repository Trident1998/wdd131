document.addEventListener('DOMContentLoaded', () => {
  const count = getStories().length;
  document.getElementById('counter').textContent = count;
});
