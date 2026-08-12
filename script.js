const stickers = [
  { 
    id: 's1', 
    player: 'Алексей Смирнов', 
    team: 'team-a',
    rarity: 1, 
    pos: 'pos-1', 
    img: 'stickers/s1.png' 
  },
  { 
    id: 's2', 
    player: 'Мария Иванова', 
    team: 'team-a',
    rarity: 2, 
    pos: 'pos-2',
    img: 'stickers/s2.png' 
  },
  { 
    id: 's3', 
    player: 'Дмитрий Петров', 
    team: 'team-a',
    rarity: 3, 
    pos: 'pos-3',
    img: 'stickers/s3.png' 
  },
  { 
    id: 's4', 
    player: 'Елена Соколова', 
    team: 'team-b',
    rarity: 1,
    pos: 'pos-4',
    img: 'stickers/s4.png' 
  },
  { 
    id: 's5', 
    player: 'Игорь Волков', 
    team: 'team-b',
    rarity: 3,
    pos: 'pos-5',
    img: 'stickers/s5.png' 
  },
  { 
    id: 's6', 
    player: 'Ольга Кузнецова', 
    team: 'team-b',
    rarity: 2,
    pos: 'pos-6',
    img: 'stickers/s6.png' 
  }
];

const getStickerBtn = document.getElementById('get-sticker-btn');
const collectedCountEl = document.getElementById('collected-count');
const albumGrid = document.getElementById('album-grid');
const tabButtons = document.querySelectorAll('.tab-btn');

let collectedStickers = [];
const storedData = localStorage.getItem('collectedStickers');

try {
  if (storedData) {
    const parsed = JSON.parse(storedData);
    if (Array.isArray(parsed)) {
      collectedStickers = parsed.filter(id => stickers.some(s => s.id === id));
    }
  }
} catch (e) {
  console.error('Ошибка localStorage, сбрасываем коллекцию', e);
  collectedStickers = [];
  localStorage.removeItem('collectedStickers');
}

let currentTeamFilter = 'all';

function getStarsHtml(count) {
  let stars = '';
  for (let i = 0; i < count; i++) {
    stars += '★';
  }
  return `<div class="stars">\${stars}</div>`;
}

function renderAlbum() {
  albumGrid.innerHTML = '';

  const visibleStickers = stickers.filter(sticker => {
    if (currentTeamFilter === 'all') return true;
    return sticker.team === currentTeamFilter;
  });

  if (visibleStickers.length === 0) {
    albumGrid.innerHTML = '<p style="color: #777; text-align: center;">Нет наклеек для этой команды</p>';
    return;
  }

  visibleStickers.forEach(sticker => {
    const card = document.createElement('div');
    const isCollected = collectedStickers.includes(sticker.id);

    if (isCollected) {
      card.className = 'sticker-card';
      card.innerHTML = `
        <img src="${sticker.img}" alt="${sticker.player}" onerror="this.src='https://via.placeholder.com/80?text=Err'">
        <h3>\${sticker.player}</h3>
        \${getStarsHtml(sticker.rarity)}
      `;
    } else {
      card.className = 'empty-slot';
      card.textContent = '?';
    }

    albumGrid.appendChild(card);
  });

  collectedCountEl.textContent = collectedStickers.length;
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentTeamFilter = btn.dataset.team;
    renderAlbum();
  });
});

getStickerBtn.addEventListener('click', () => {
  if (collectedStickers.length >= stickers.length) {
    alert('Поздравляю! Ты собрал весь альбом!');
    return;
  }

  let attempts = 0;
  let newSticker = null;

  while (attempts < 100) {
    const randomIndex = Math.floor(Math.random() * stickers.length);
    const candidate = stickers[randomIndex];

    if (!collectedStickers.includes(candidate.id)) {
      newSticker = candidate;
      break;
    }
    attempts++;
  }

  if (newSticker) {
    collectedStickers.push(newSticker.id);
    localStorage.setItem('collectedStickers', JSON.stringify(collectedStickers));
    renderAlbum();
  } else {
    alert('Не удалось выбрать новую наклейку. Обновите страницу.');
  }
});

renderAlbum();
