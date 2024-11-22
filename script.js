const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

function updateCountDown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}: ${seconds}`;

    time--;

}