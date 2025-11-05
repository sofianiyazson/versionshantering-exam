const form = document.getElementById('bookmarkForm');

// lägga till ett bokmärke
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  addBookmark(title, url);
  form.reset();
});