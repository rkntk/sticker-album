const stickers = [
  { id: 's1', name: 'Космическая кошка', rarity: 'обычная', img: 'stickers/s1.png' },
  { id: 's2', name: 'Пиратский енот', rarity: 'редкая', img: 'stickers/s2.png' },
  { id: 's3', name: 'Волшебный дракон', rarity: 'эпическая', img: 'stickers/s3.png' }
];

let userCollection = JSON.parse(localStorage.getItem('sticker_album_collection')) || [];

const albumEl = document.getElementById('album');
const catalogEl = document.getElementById('catalog');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
const btn = document.getElementById('get-sticker-btn');

totalEl.textContent = stickers.length;

function renderCollection() {
  albumEl.innerHTML = '';
  userCollection.forEach(id => {
    const sticker = stickers.find(s => s.id === id);
    if (!sticker) return;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${sticker.img}" alt="${sticker.name}" />
      <h3>${sticker.name}</h3>
      <span class="rarity">${sticker.rarity}</span>
    `;
    albumEl.appendChild(card);
  });
  countEl.textContent = userCollection.length;
}

function renderCatalog() {
  catalogEl.innerHTML = '';
  stickers.forEach(sticker => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${sticker.img}" alt="${sticker.name}" />
      <h3>${sticker.name}</h3>
      <span class="rarity">${sticker.rarity}</span>
    `;
    catalogEl.appendChild(card);
  });
}

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * stickers.length);
  const newSticker = stickers[randomIndex];
  if (!userCollection.includes(newSticker.id)) {
    userCollection.push(newSticker.id);
    localStorage.setItem('sticker_album_collection', JSON.stringify(userCollection));
    renderCollection();
  } else {
    alert('Такая наклейка уже есть в коллекции!');
  }
});

renderCollection();
renderCatalog();
