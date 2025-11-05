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

  // Sort bookmarks alphabetically by title
  bookmarks.sort((a, b) => a.title.localeCompare(b.title));

  let currentLetter = '';

  bookmarks.forEach((bm, i) => {
    const firstLetter = bm.title[0].toUpperCase();

    // Add letter header if it's a new letter
    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      const letterHeader = document.createElement('li');
      letterHeader.textContent = currentLetter;
      letterHeader.classList.add('letter-header');
      list.appendChild(letterHeader);

    }

    // Add bookmark item with URL shown under title
   const li = document.createElement('li');
    li.innerHTML = `
  <div class="bookmark-info">
    <div class="bookmark-title">${bm.title}</div>
    <div class="bookmark-url"><a href="${bm.url}" target="_blank">${bm.url}</a></div>
  </div>
  <button class="delete" onclick="removeBookmark(${i})">Ta bort</button>
`;
list.appendChild(li);       
} );
}
