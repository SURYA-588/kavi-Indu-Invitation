// Countdown Timer for October 19, 2025, 08:00 AM
if (document.getElementById('countdown-timer')) {
    const targetDate = new Date(2025, 9, 19, 8, 0, 0); // October is month 9 (0-indexed)

    function updateCountdown() {
        const now = new Date();
        const delta = targetDate - now;

        if (delta > 0) {
            const days = Math.floor(delta / (1000 * 60 * 60 * 24));
            const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((delta / (1000 * 60)) % 60);
            const seconds = Math.floor((delta / 1000) % 60);

            document.getElementById('days').innerText = days + ' Days';
            document.getElementById('hours').innerText = hours + ' Hours';
            document.getElementById('minutes').innerText = minutes + ' Minutes';
            document.getElementById('seconds').innerText = seconds + ' Seconds';
        } else {
            document.getElementById('countdown-timer').innerText = "It's time! The celebration has begun!";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}
// Blurred circles background animation
function createBlurredCircles() {
    const container = document.getElementById('blurred-circles-bg');
    if (!container) return;
    const circles = [
        {size: 180, top: '10%', left: '20%', delay: '0s'},
        {size: 80, top: '30%', left: '60%', delay: '0.5s'},
        {size: 120, top: '70%', left: '40%', delay: '1s'},
        {size: 40, top: '50%', left: '80%', delay: '1.5s'},
        {size: 220, top: '80%', left: '10%', delay: '2s'},
        {size: 60, top: '20%', left: '75%', delay: '2.5s'},
    ];
    circles.forEach((c, i) => {
        const el = document.createElement('div');
        el.className = 'blurred-circle';
        el.style.width = `${c.size}px`;
        el.style.height = `${c.size}px`;
        el.style.top = c.top;
        el.style.left = c.left;
        el.style.animationDelay = c.delay;
        container.appendChild(el);
    });
}
window.addEventListener('DOMContentLoaded', createBlurredCircles);

