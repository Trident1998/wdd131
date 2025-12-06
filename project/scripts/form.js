document.getElementById('storyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const newStory = {
    id: Date.now(),
    author: document.getElementById('author').value,
    title: document.getElementById('title').value,
    text: document.getElementById('text').value,
    date: new Date().toISOString().split('T')[0],
  };

  saveStory(newStory);

  const btn = this.querySelector('button');
  btn.textContent = 'Submitting...';

  setTimeout(() => {
    window.location.href = 'thanks.html';
  }, 500);
});
