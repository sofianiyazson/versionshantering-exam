const form = document.getElementById('bookmarkForm');
const list = document.getElementById('bookmarkList');
let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

// show bookmarks from localStorage
    render();

// Add bookmark
form.addEventListener('submit', e => {
  e.preventDefault(); // stop the form from submitting
  const title = document.getElementById('title').value.trim();
  const url = document.getElementById('url').value.trim();
  if (!title || !url) return;
  
  bookmarks.push({ title, url });
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  form.reset();
  render();
});

// Remove bookmark
function removeBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  render();
}

// Show bookmarks list
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
