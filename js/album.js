/* js/album.js */

var currentPage = 1;
var albumData = null;

function initAlbum() {
    var urlParams = new URLSearchParams(window.location.search);
    var albumId = parseInt(urlParams.get('id')) || 1;

    albumData = ALBUMS.find(function(a) { return a.id === albumId; }) || ALBUMS[0];

    var titleEl = document.querySelector('.album-title');
    if (titleEl) {
        titleEl.textContent = albumData.name || 'Неизвестный альбом';
    }

    currentPage = 1;
    renderNavButtons();
    renderPage(currentPage);
}

function renderNavButtons() {
    var container = document.getElementById('page-buttons-container');
    if (!container) return;

    container.innerHTML = '';

    for (var i = 0; i < albumData.pages.length; i++) {
        var page = albumData.pages[i];
        var btn = document.createElement('button');
        btn.className = 'page-btn' + (i === currentPage - 1 ? ' active' : '');
        btn.disabled = (i === currentPage - 1);
        btn.textContent = page.name;

        btn.onclick = (function(pageNum) {
            return function() {
                if (pageNum !== currentPage) {
                    changePage(pageNum);
                }
            };
        })(i + 1);

        container.appendChild(btn);
    }
}

function changePage(pageNum) {
    if (pageNum < 1 || pageNum > albumData.pages.length) return;
    currentPage = pageNum;
    renderPage(currentPage);
    renderNavButtons();
}

function renderPage(pageNum) {
    var grid = document.getElementById('album-grid');
    if (!grid) return;

    var page = albumData.pages[pageNum - 1];
    if (!page) return;

    grid.innerHTML = '';

    var collectedCount = 0;
    for (var i = 1; i <= albumData.totalStickers; i++) {
        if (getStickerCount(i) > 0) collectedCount++;
    }

    var collectedEl = document.querySelector('.collected-count');
    if (collectedEl) collectedEl.textContent = 'Собрано: ' + collectedCount + ' / ' + albumData.totalStickers;

    var totalEl = document.querySelector('.total-count');
    if (totalEl) totalEl.textContent = 'Команда: ' + page.name;

    for (var i = 0; i < page.slots.length; i++) {
        var stickerId = page.slots[i];
        var count = getStickerCount(stickerId);
        var isFilled = count > 0;

        var slot = document.createElement('div');
        slot.className = 'sticker-slot ' + (isFilled ? 'filled' : 'empty');

        var imgSrc = getStickerImage(stickerId);
        var imageHtml = '';

        if (isFilled) {
            if (imgSrc) {
                imageHtml = '<img src="' + imgSrc + '" alt="' + getStickerName(stickerId) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'">' +
                    '<div style="font-size:32px;display:none;">' + getStickerEmoji(stickerId) + '</div>';
            } else {
                imageHtml = '<div style="font-size:32px;">' + getStickerEmoji(stickerId) + '</div>';
            }
            slot.innerHTML = imageHtml + '<div class="sticker-badge">x' + count + '</div>';
        } else {
            imageHtml = '<div class="slot-number">' + stickerId + '</div>';
            slot.innerHTML = imageHtml;
        }

        // Кликабельны ВСЕ слоты — и заполненные, и пустые
        slot.style.cursor = 'pointer';
        slot.onclick = (function(id) {
            return function() { showStickerDetails(id); };
        })(stickerId);

        grid.appendChild(slot);
    }

    var loaderEl = document.querySelector('.loader-text');
    if (loaderEl) loaderEl.style.display = 'none';
}

function showStickerDetails(stickerId) {
    var name = getStickerName(stickerId);
    var birthDate = getStickerBirthDate(stickerId);
    var position = getStickerPosition(stickerId);
    var team = getStickerTeam(stickerId);
    var imgSrc = getStickerImage(stickerId) || '';
    var count = getStickerCount(stickerId);

    var modalImg = document.getElementById('modal-img');
    if (imgSrc) {
        modalImg.src = imgSrc;
        modalImg.style.display = '';
        modalImg.onerror = function() { this.style.display = 'none'; };
    } else {
        modalImg.style.display = 'none';
    }

    document.getElementById('modal-name').textContent = name;
    document.getElementById('modal-info').innerHTML =
        'Команда: ' + team + '<br>' +
        'Гражданство: ' + birthDate + '<br>' +
        'Позиция: ' + position + '<br>' +
        'В коллекции: ' + count + ' шт.';

    document.getElementById('detail-modal').classList.remove('hidden');
}

function closeDetailModal() {
    document.getElementById('detail-modal').classList.add('hidden');
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var modal = document.getElementById('detail-modal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});
