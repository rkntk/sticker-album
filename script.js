const stickers = [
  { 
    id: 's1', 
    name: 'Космическая кошка', 
    rarity: 'обычная', 
    img: 'stickers/s1.jpg' // Путь к файлу в папке stickers
  },
  { 
    id: 's2', 
    name: 'Пиратский енот', 
    rarity: 'редкая', 
    img: 'stickers/s2.png' 
  },
  { 
    id: 's3', 
    name: 'Волшебный дракон', 
    rarity: 'эпическая', 
    img: 'stickers/s3.png' 
  }
];

const getStickerBtn = document.getElementById('get-sticker-btn');
const collectedCountEl = document.getElementById('collected-count');
const albumGrid = document.getElementById('album-grid');

if (!getStickerBtn || !collectedCountEl || !albumGrid) {
  console.error('Не найдены элементы на странице. Проверьте ID в index.html');
} else {
  let collectedStickers = JSON.parse(localStorage.getItem('collectedStickers')) || [];

  function renderAlbum() {
    albumGrid.innerHTML = '';
    
    if (collectedStickers.length === 0) {
      albumGrid.innerHTML = '<p style="color: #777;">Альбом пока пуст. Получи первую наклейку!</p>';
      return;
    }

    collectedStickers.forEach(stickerId => {
      const sticker = stickers.find(s => s.id === stickerId);
      if (sticker) {
        const card = document.createElement('div');
        card.className = 'sticker-card';
        card.innerHTML = `
          <img src="${sticker.img}" alt="${sticker.name}" onerror="this.src='https://via.placeholder.com/100?text=Not+Found'" />
          <h3>\${sticker.name}</h3>
          <p>\${sticker.rarity}</p>
        `;
        albumGrid.appendChild(card);
      }
    });

    collectedCountEl.textContent = collectedStickers.length;
  }

  getStickerBtn.addEventListener('click', () => {
    if (collectedStickers.length >= stickers.length) {
      alert('Поздравляю! Ты собрал весь альбом!');
      return;
    }

    let newSticker;
    do {
      const randomIndex = Math.floor(Math.random() * stickers.length);
      newSticker = stickers[randomIndex];
    } while (collectedStickers.includes(newSticker.id));

    collectedStickers.push(newSticker.id);
    localStorage.setItem('collectedStickers', JSON.stringify(collectedStickers));
    
    renderAlbum();
  });

  renderAlbum();
}
