const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const messageEl = document.getElementById("message");

const newYearTime = new Date("2026-01-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    if (gap <= 0) {
        document.querySelector('.countdown').style.display = 'none';
        messageEl.innerHTML = "🎉 Happy New Year! 🎇";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day).toString().padStart(2, '0');
    const h = Math.floor((gap % day) / hour).toString().padStart(2, '0');
    const m = Math.floor((gap % hour) / minute).toString().padStart(2, '0');
    const s = Math.floor((gap % minute) / second).toString().padStart(2, '0');

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
}

// Run `updateCountdown` immediately to prevent delay
updateCountdown();

// Corrected interval logic to refresh every second
setInterval(updateCountdown, 1000);
