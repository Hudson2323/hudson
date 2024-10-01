function downloadApp() {
    const link = document.createElement('a');
    link.href = 'https://google.com'; // Замените ссылку на актуальную
    link.download = 'BetWinnerApp.apk'; // Имя скачиваемого файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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

// Определение устройства и применение анимации
window.onload = function() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const button1 = document.querySelector('.download-button-img:first-child'); // Кнопка iOS
    const button2 = document.querySelector('.download-button-img:last-child'); // Кнопка Android

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        button1.classList.add('ios-button'); // Применение анимации для iOS
    } else if (/android/i.test(userAgent)) {
        button2.classList.add('android-button'); // Применение анимации для Android
    }
};
