/* js/app.js */

document.addEventListener('DOMContentLoaded', function() {
    renderAlbums();
    updateStats();
    updateExchangeStatus();
});

function renderAlbums() {
    var grid = document.getElementById('albums-grid');
    if (!grid) return;
    grid.innerHTML = '';

    for (var i = 0; i < ALBUMS.length; i++) {
        var album = ALBUMS[i];
        if (!album.active) continue;

        var card = document.createElement('div');
        card.className = 'album-card';

        var collected = 0;
        for (var j = 1; j <= album.totalStickers; j++) {
            if (getStickerCount(j) > 0) collected++;
        }
        var percent = Math.round((collected / album.totalStickers) * 100);

        var coverHtml = album.coverImage
            ? '<img src="' + album.coverImage + '" alt="' + album.title + '" class="album-cover-img" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="album-cover" style="display:none;">' + album.coverEmoji + '</div>'
            : '<div class="album-cover">' + album.coverEmoji + '</div>';

        card.innerHTML =
            coverHtml +
            '<div class="album-info">' +
                '<h3>' + album.title + '</h3>' +
                '<p class="album-status">Активен</p>' +
                '<div class="album-progress-text">Собрано: ' + collected + ' / ' + album.totalStickers + '</div>' +
                '<div class="album-progress-bar"><div class="album-progress-fill" style="width: ' + percent + '%"></div></div>' +
            '</div>';

        card.onclick = function(id) {
            return function() {
                window.location.href = 'album.html?id=' + id;
            };
        }(album.id);

        grid.appendChild(card);
    }
}

function redeemCode() {
    var input = document.getElementById('code-input');
    var messageBox = document.getElementById('code-message');
    if (!input || !messageBox) return;

    var code = input.value.trim().toUpperCase();
    if (!code) {
        showMessage(messageBox, 'Введите код!', 'error');
        return;
    }

    var redeemed = localStorage.getItem(LS_REDEEMED) ? JSON.parse(localStorage.getItem(LS_REDEEMED)) : [];
    if (redeemed.indexOf(code) !== -1) {
        showMessage(messageBox, 'Этот код уже использован!', 'error');
        return;
    }

    if (VALID_CODES.indexOf(code) === -1) {
        showMessage(messageBox, 'Неверный код! Попробуйте ещё раз.', 'error');
        return;
    }

    var activeAlbum = ALBUMS.find(function(a) { return a.active; }) || ALBUMS[0];
    var maxId = activeAlbum.totalStickers;

    var pack = [];
    for (var i = 0; i < STICKERS_PER_PACK; i++) {
        var randomId = Math.floor(Math.random() * maxId) + 1;
        pack.push(randomId);
    }

    redeemed.push(code);
    localStorage.setItem(LS_REDEEMED, JSON.stringify(redeemed));

    var modal = document.getElementById('pack-modal');
    var packContainer = document.getElementById('pack-stickers');
    if (!modal || !packContainer) return;

    packContainer.innerHTML = '';
    var hasNew = false;

    for (var i = 0; i < pack.length; i++) {
        var stickerId = pack[i];
        var isDuplicate = getStickerCount(stickerId) > 0;
        if (!isDuplicate) hasNew = true;

        var stickerEl = document.createElement('div');
        stickerEl.className = 'pack-sticker ' + (isDuplicate ? 'is-duplicate' : 'is-new');

        var imgSrc = getStickerImage(stickerId);
        var imageHtml = imgSrc
            ? '<img src="' + imgSrc + '" alt="' + getStickerName(stickerId) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="pack-emoji-fallback" style="display:none;">' + getStickerEmoji(stickerId) + '</div>'
            : '<div class="pack-emoji-fallback">' + getStickerEmoji(stickerId) + '</div>';

        stickerEl.innerHTML =
            imageHtml +
            '<div class="pack-sticker-name">' + getStickerName(stickerId) + '</div>' +
            '<div class="pack-sticker-team">' + getStickerTeam(stickerId) + '</div>' +
            '<div class="pack-sticker-label">' + (isDuplicate ? 'Повтор' : 'Новая!') + '</div>';

        packContainer.appendChild(stickerEl);
        addSticker(stickerId);
    }

    modal.classList.remove('hidden');
    input.value = '';
    showMessage(messageBox, hasNew ? 'Пак открыт! Есть новые наклейки.' : 'Пак открыт, все наклейки были в коллекции.', 'success');
    updateStats();
    renderAlbums();
}

function closePackModal() {
    var modal = document.getElementById('pack-modal');
    if (modal) modal.classList.add('hidden');
}

function updateStats() {
    var totalAlbum = ALBUMS.find(function(a) { return a.active; }) || ALBUMS[0];
    var collected = 0;
    for (var i = 1; i <= totalAlbum.totalStickers; i++) {
        if (getStickerCount(i) > 0) collected++;
    }

    var elCount = document.getElementById('user-sticker-count');
    var elTotal = document.getElementById('total-sticker-count');
    if (elCount) elCount.textContent = collected;
    if (elTotal) elTotal.textContent = totalAlbum.totalStickers;
}

function updateExchangeStatus() {
    var btn = document.getElementById('exchange-link');
    if (!btn) return;
    if (canExchange()) {
        btn.classList.remove('disabled');
        btn.href = 'exchange.html';
    } else {
        btn.classList.add('disabled');
        btn.href = 'exchange.html';
        btn.title = 'Нет дублей для обмена';
    }
}

function showMessage(el, text, type) {
    if (el) {
        el.textContent = text;
        el.className = 'code-message ' + type;
    }
}