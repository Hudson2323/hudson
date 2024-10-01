function handleMouseOver(button) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('dark-overlay'); // Добавляем затемнение фона
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.classList.add('inactive'); // Затемняем другие кнопки
        }
    });
}

function handleMouseOut() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('dark-overlay'); // Убираем затемнение фона
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        btn.classList.remove('inactive'); // Восстанавливаем стиль кнопок
    });
}

// Функция для определения устройства
function detectDevice() {
    const userAgent = navigator.userAgent;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Устройство iOS
        const iosButton = document.querySelector('.button-one');
        iosButton.classList.add('ios-button'); // Добавляем анимацию для iOS
    } else if (/Android/.test(userAgent)) {
        // Устройство Android
        const androidButton = document.querySelector('.button-two');
        androidButton.classList.add('android-button'); // Добавляем анимацию для Android
    }
}

// Запускаем функцию определения устройства при загрузке страницы
window.onload = detectDevice;
