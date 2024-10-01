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
