const baseUrl = "https://embedflix.net/tv/";

function loadPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const channel = urlParams.get('channel');
    document.getElementById("movie-iframe").src = baseUrl + channel;
}
loadPage()

const fullscreenButton = document.getElementById('fullscreenButton');
const iframe = document.getElementById('movie-iframe');

fullscreenButton.addEventListener('click', () => {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
});

function goBack() {
    window.location.href = `/`;
}