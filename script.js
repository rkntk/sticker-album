const stickers = [
  { 
    id: 's1', 
    player: 'Алексей Смирнов', 
    team: 'team-a',
    rarity: 1, // 1 звезда
    pos: 'pos-1', // Фиксированная позиция
    img: 'stickers/s1.png' 
  },
  { 
    id: 's2', 
    player: 'Мария Иванова', 
    team: 'team-a',
    rarity: 2, // 2 звезды
    pos: 'pos-2',
    img: 'stickers/s2.png' 
  },
  { 
    id: 's3', 
    player: 'Дмитрий Петров', 
    team: 'team-a',
    rarity: 3, // 3 звезды
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

let collectedStickers = JSON.parse(localStorage.getItem('collectedStickers')) || [];
let currentTeamFilter = 'all';

// Функция генерации HTML для звёзд
function getStarsHtml(count) {
  let stars = '';
  for (let i = 0; i < count; i++) {
    stars += '★';
  }
  return `<div class="stars">\${stars}</div>`;
}

// Функция отрисовки альбома
function renderAlbum() {
  albumGrid.innerHTML = '';
  
  // Фильтруем наклейки по выбранной команде
  const visibleStickers = stickers.filter(sticker => {
    if (currentTeamFilter === 'all') return true;
    return sticker.team === currentTeamFilter;
  });

  // Если после фильтрации ничего нет, показываем заглушку
  if (visibleStickers.length === 0) {
    albumGrid.innerHTML = '<p style="color: #777;">Нет наклеек для этой команды</p>';
    return;
  }

  // Проходим по всем возможным позициям (от pos-1 до pos-6)
  // Это гарантирует, что ячейки не сдвинутся, даже если наклейка не собрана
  for (let i = 1; i <= 6; i++) {
    const posClass = `pos-\${i}`;
    const sticker = stickers.find(s => s.pos === posClass);
    
    // Проверяем, собрана ли эта конкретная наклейка
    const isCollected = collectedStickers.includes(sticker.id);

    // Если наклейка относится к другой команде, мы её не показываем в этом фильтре,
    // но ячейку оставляем пустой, чтобы сетка не ломалась (опционально можно скрыть совсем)
    if (sticker.team !== currentTeamFilter && currentTeamFilter !== 'all') {
      continue; 
    }

    const card = document.createElement('div');
    
    if (isCollected) {
      card.className = `sticker-card \${posClass}`;
      card.innerHTML = `
        <img src="${sticker.img}" alt="${sticker.player}" onerror="this.src='https://via.placeholder.com/80?text=Err'" />
        <h3>\${sticker.player}</h3>
        \${getStarsHtml(sticker.rarity)}
      `;
    } else {
      // Пустая ячейка
      card.className = `empty-slot \${posClass}`;
      card.textContent = '?';
    }
    
    albumGrid.appendChild(card);
  }

  // Обновляем счётчик
  collectedCountEl.textContent = collectedStickers.length;
}

// Логика переключения табов
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убираем активный класс у всех
    tabButtons.forEach(b => b.classList.remove('active'));
    // Добавляем текущему
    btn.classList.add('active');
    // Обновляем фильтр
    currentTeamFilter = btn.dataset.team;
    renderAlbum();
  });
});

// Логика получения наклейки
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

// Инициализация
renderAlbum();
