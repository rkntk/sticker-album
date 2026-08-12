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

// --- ИСПРАВЛЕНИЕ ОШИБКИ С ПАМЯТЬЮ ---
let collectedStickers = [];
const storedData = localStorage.getItem('collectedStickers');

try {
  if (storedData) {
    const parsed = JSON.parse(storedData);
    // Проверка: если там массив строк - оставляем, если что-то другое - сбрасываем
    if (Array.isArray(parsed)) {
      collectedStickers = parsed.filter(id => stickers.some(s => s.id === id));
    }
  }
} catch (e) {
  console.error('Ошибка чтения localStorage, сбрасываем коллекцию', e);
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
    albumGrid.innerHTML = '<p style="color: #777;">Нет наклеек для этой команды</p>';
    return;
  }

  // Рисуем сетку строго по позициям (от 1 до 6)
  for (let i = 1; i <= 6; i++) {
    const posClass = `pos-\${i}`;
    const sticker = stickers.find(s => s.pos === posClass);
    
    // Если наклейка не относится к текущей команде, пропускаем ячейку (не рисуем ничего, чтобы не было дыр)
    if (sticker.team !== currentTeamFilter && currentTeamFilter !== 'all') {
      continue; 
    }

    const card = document.createElement('div');
    const isCollected = collectedStickers.includes(sticker.id);

    if (isCollected) {
      card.className = `sticker-card \${posClass}`;
      // onerror подставит серый квадрат, если картинки нет, но не сломает скрипт
      card.innerHTML = `
        <img src="${sticker.img}" alt="${sticker.player}" onerror="this.src='https://via.placeholder.com/80?text=Err'" />
        <h3>\${sticker.player}</h3>
        \${getStarsHtml(sticker.rarity)}
      `;
    } else {
      card.className = `empty-slot \${posClass}`;
      card.textContent = '?';
    }
    
    albumGrid.appendChild(card);
  }

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
  // Проверка: собран ли весь альбом
  if (collectedStickers.length >= stickers.length) {
    alert('Поздравляю! Ты собрал весь альбом!');
    return;
  }

  // Логика выбора случайной наклейки
  let attempts = 0;
  let newSticker = null;
  
  // Пытаемся найти наклейку, которой нет в коллекции (максимум 100 попыток, чтобы не зависнуть)
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
    // Этот блок сработает только если цикл не нашел свободную наклейку, 
    // но проверка в начале должна была это предотвратить.
    alert('Что-то пошло не так при выборе наклейки. Обновите страницу.');
  }
});

renderAlbum();
