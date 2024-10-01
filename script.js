function downloadApp() {
    const link = document.createElement('a');
    link.href = 'https://google.com'; // Замените ссылку на актуальную
    link.download = 'BetWinnerApp.apk'; // Имя скачиваемого файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
