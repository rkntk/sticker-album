/* js/exchange.js */

var selectedStickers = [];

document.addEventListener('DOMContentLoaded', function() {
    renderDuplicates();
});

function renderDuplicates() {
    var grid = document.getElementById('duplicates-grid');
    if (!grid) return;
    grid.innerHTML = '';

    var collection = JSON.parse(localStorage.getItem(LS_COLLECTION)) || {};
    var hasDuplicates = false;

    for (var key in collection) {
        var id = parseInt(key);
        var count = collection[key];
        if (count > 1) {
            hasDuplicates = true;
            var div = document.createElement('div');
            div.className = 'trade-sticker';

            var isSelected = selectedStickers.indexOf(id) !== -1;
            if (isSelected) {
                div.classList.add('selected');
            }

            var imgSrc = getStickerImage(id);
            var imgHtml = imgSrc
                ? '<img src="' + imgSrc + '" alt="' + getStickerName(id) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="trade-emoji" style="display:none;">' + getStickerEmoji(id) + '</div>'
                : '<div class="trade-emoji">' + getStickerEmoji(id) + '</div>';

            div.innerHTML =
                imgHtml +
                '<div class="trade-name">' + getStickerName(id) + '</div>' +
                '<div class="trade-count">x' + (count - 1) + '</div>';

            div.onclick = function(stickerId) {
                return function() {
                    toggleSelect(stickerId);
                };
            }(id);

            grid.appendChild(div);
        }
    }

    if (!hasDuplicates) {
        grid.innerHTML = '<p class="no-duplicates">У вас пока нет повторных наклеек. Введите коды, чтобы получить больше.</p>';
    }
}

function toggleSelect(stickerId) {
    var msg = document.getElementById('exchange-message');
    if (msg) { msg.textContent = ''; msg.className = 'code-message'; }

    var idx = selectedStickers.indexOf(stickerId);
    if (idx !== -1) {
        selectedStickers.splice(idx, 1);
    } else {
        if (selectedStickers.length >= 2) {
            showExchangeMessage('Можно выбрать только 2 наклейки.', 'error');
            return;
        }
        if (selectedStickers.indexOf(stickerId) === -1 && getStickerCount(stickerId) >= 2) {
            selectedStickers.push(stickerId);
        }
    }

    updateSelectedDisplay();
    renderDuplicates();
}

function updateSelectedDisplay() {
    var slot1 = document.getElementById('selected-1');
    var slot2 = document.getElementById('selected-2');
    var resultSlot = document.getElementById('selected-result');
    var btn = document.getElementById('exchange-button');

    for (var i = 0; i < 2; i++) {
        var slot = (i === 0) ? slot1 : slot2;
        if (selectedStickers.length > i) {
            var id = selectedStickers[i];
            var img = getStickerImage(id);
            slot.innerHTML = img
                ? '<img src="' + img + '" alt="' + getStickerName(id) + '" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="slot-emoji" style="display:none;">' + getStickerEmoji(id) + '</div>'
                : '<div class="slot-emoji">' + getStickerEmoji(id) + '</div>';
            slot.classList.add('has-sticker');
        } else {
            slot.innerHTML = '<span class="slot-question">?</span>';
            slot.classList.remove('has-sticker');
        }
    }

    resultSlot.innerHTML = '<span class="slot-question">?</span>';
    resultSlot.classList.remove('has-sticker');

    if (selectedStickers.length === 2) {
        btn.disabled = false;
        btn.classList.remove('btn-disabled');
    } else {
        btn.disabled = true;
        btn.classList.add('btn-disabled');
    }
}

function doExchange() {
    var msg = document.getElementById('exchange-message');
    if (msg) { msg.textContent = ''; msg.className = 'code-message'; }

    if (selectedStickers.length !== 2) {
        showExchangeMessage('Выберите 2 наклейки для обмена.', 'error');
        return;
    }

    var id1 = selectedStickers[0];
    var id2 = selectedStickers[1];
    if (getStickerCount(id1) < 2 || getStickerCount(id2) < 2) {
        showExchangeMessage('Недостаточно повторов для обмена.', 'error');
        return;
    }

    removeSticker(id1);
    removeSticker(id2);

    var album = ALBUMS.find(function(a) { return a.active; }) || ALBUMS[0];
    var newStickerId = Math.floor(Math.random() * album.totalStickers) + 1;

    var wasNew = getStickerCount(newStickerId) === 0;
    addSticker(newStickerId);

    var display = document.getElementById('exchange-result-display');
    var imgSrc = getStickerImage(newStickerId);
    var imgHtml = imgSrc
        ? '<img src="' + imgSrc + '" alt="' + getStickerName(newStickerId) + '" class="result-img" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><div class="result-emoji" style="display:none;">' + getStickerEmoji(newStickerId) + '</div>'
        : '<div class="result-emoji">' + getStickerEmoji(newStickerId) + '</div>';

    display.innerHTML =
        imgHtml +
        '<div class="result-name">' + getStickerName(newStickerId) + '</div>' +
        '<div class="result-label ' + (wasNew ? 'new' : 'dup') + '">' +
        (wasNew ? 'Новая наклейка!' : 'Повтор') + '</div>';

    document.getElementById('exchange-modal').classList.remove('hidden');

    selectedStickers = [];
    updateSelectedDisplay();
    renderDuplicates();
}

function cancelSelection() {
    selectedStickers = [];
    updateSelectedDisplay();
    renderDuplicates();
    var msg = document.getElementById('exchange-message');
    if (msg) { msg.textContent = ''; msg.className = 'code-message'; }
}

function closeExchangeModal() {
    document.getElementById('exchange-modal').classList.add('hidden');
    document.getElementById('exchange-result-display').innerHTML = '';
}

function showExchangeMessage(text, type) {
    var el = document.getElementById('exchange-message');
    if (el) {
        el.textContent = text;
        el.className = 'code-message ' + type;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var modal = document.getElementById('exchange-modal');
        if (modal && !modal.classList.contains('hidden')) {
            closeExchangeModal();
        }
    }
});
