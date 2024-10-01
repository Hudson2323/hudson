function handleMouseOver(button) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('dark-overlay'); // Затемняем фон
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.classList.add('inactive'); // Затемняем неактивные кнопки
        }
    });

    // Увеличиваем кнопку на 30%
    button.style.transform = 'scale(1.3)';
}

function handleMouseOut(button) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('dark-overlay'); // Убираем затемнение фона
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        btn.classList.remove('inactive'); // Восстанавливаем стиль кнопок
    });

    // Сбрасываем увеличение кнопки
    button.style.transform = 'scale(1)';
}

// Функция для определения устройства
function detectDevice() {
    const userAgent = navigator.userAgent;

    const iosButton = document.querySelector('.button-one');
    const androidButton = document.querySelector('.button-two');

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Устройство iOS
        iosButton.style.animation = 'iosAnimation 2s infinite'; // Добавляем анимацию
    } else if (/Android/.test(userAgent)) {
        // Устройство Android
        androidButton.style.animation = 'androidAnimation 2s infinite'; // Добавляем анимацию
    }
}

// Запускаем функцию определения устройства при загрузке страницы
window.onload = detectDevice;

// Применяем обработчики событий для кнопок
document.querySelectorAll('.download-button-img').forEach(button => {
    button.addEventListener('mouseover', () => handleMouseOver(button));
    button.addEventListener('mouseout', () => handleMouseOut(button));
});
