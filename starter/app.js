const form = document.getElementById('bookmarkForm');
const list = document.getElementById('bookmarkList');
let bookmarks = [];

// Visa alla bokmärken vid start
    render();

// lägga till ett bokmärke
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const url = document.getElementById('url').value.trim();
  if (!title || !url) return;
  bookmarks.push({ title, url });
  form.reset();
  render();
});

// Visa listan
    function render() {
      list.innerHTML = '';
      bookmarks.forEach((bm, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="${bm.url}" target="_blank">${bm.title}</a>
          <button class="delete" onclick="removeBookmark(${i})">Ta bort</button>
        `;
        list.appendChild(li);
      });
    }