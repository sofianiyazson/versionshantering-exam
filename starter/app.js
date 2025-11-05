const form = document.getElementById('bookmarkForm');
let bookmarks = [];

form.addEventListener('submit', e => {
  e.preventDefault(); // Stoppar formuläret från att ladda om sidan

  const title = document.getElementById('title').value.trim();
  const url = document.getElementById('url').value.trim();
  if (!title || !url) return; // Avbryt om något fält är tomt

  // Lägg till bokmärket i arrayen
  bookmarks.push({ title, url });

  form.reset(); // Rensa input-fälten
  render();     // Uppdatera listan på sidan
});
