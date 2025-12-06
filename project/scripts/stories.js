document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('stories-grid');
  const stories = getStories().reverse();

  if (stories.length === 0) {
    container.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center;">No stories yet. Be the first to share one!</p>';
    return;
  }

  stories.forEach((story) => {
    const article = document.createElement('article');
    article.className = 'testimonial-card';

    const isLong = story.text.length > 180;

    // Get first letter for avatar
    const initial = story.author.charAt(0).toUpperCase();

    article.innerHTML = `
                    <div class="card-body">
                        <h3 class="story-title">${story.title}</h3>
                        <div class="story-text ${
                          isLong ? 'collapsed' : ''
                        }" id="text-${story.id}">
                            <p>${story.text}</p>
                        </div>
                        ${
                          isLong
                            ? `<button class="read-more-link" onclick="toggleStory(${story.id}, this)">Read full story</button>`
                            : ''
                        }
                    </div>
                    <div class="card-footer">
                        <div class="author-avatar">${initial}</div>
                        <div class="author-info">
                            <span class="author-name">${story.author}</span>
                            <span class="story-date">${story.date}</span>
                        </div>
                    </div>
                `;
    container.appendChild(article);
  });
});

function toggleStory(id, btn) {
  const textDiv = document.getElementById(`text-${id}`);
  if (textDiv.classList.contains('collapsed')) {
    textDiv.classList.remove('collapsed');
    textDiv.classList.add('expanded');
    btn.textContent = 'Show less';
  } else {
    textDiv.classList.remove('expanded');
    textDiv.classList.add('collapsed');
    btn.textContent = 'Read full story';
  }
}
