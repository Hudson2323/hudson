function handleMouseOver(button) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('dark-overlay'); 
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        if (btn !== button) {
            btn.classList.add('inactive'); 
        }
    });
}

function handleMouseOut() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('dark-overlay'); 
    const buttons = document.querySelectorAll('.download-button-img');
    buttons.forEach(btn => {
        btn.classList.remove('inactive'); 
    });
}
