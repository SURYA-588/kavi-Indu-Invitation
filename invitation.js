// Add event listeners for call and WhatsApp buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.call-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const number = btn.getAttribute('data-number');
      if (number) callNumber(number);
    });
  });
  document.querySelectorAll('.whatsapp-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const number = btn.getAttribute('data-number');
      if (number) whatsappNumber(number);
    });
  });
});
// Sparkle effect behind content (smaller, star-like)
function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle star-shape';
  sparkle.style.left = randomBetween(0, 98) + 'vw';
  sparkle.style.top = randomBetween(0, 98) + 'vh';
  const size = randomBetween(2, 5); // even smaller
  sparkle.style.width = sparkle.style.height = size + 'px';
  sparkle.style.opacity = randomBetween(0.08, 0.16); // even lighter
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1800); // disappear a bit faster
}
setInterval(createSparkle, 600); // much less frequent
// Initial sparkles
for (let i = 0; i < 4; i++) setTimeout(createSparkle, i * 220); // very few initial sparkles

// ===== Wedding Invitation — Script =====
// Subtle 3D tilt on pointer move. Works with mouse and touch.
(function () {
  const card = document.getElementById('card');
  if (!card) return;

  let rect;
  const maxTilt = 10; // degrees

  function setRect() { rect = card.getBoundingClientRect(); }
  setRect();
  window.addEventListener('resize', setRect);

  function pointerPos(e) {
    if (e.touches && e.touches[0]) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  }

  function onMove(e) {
    const { x, y } = pointerPos(e);
    const px = (x - rect.left) / rect.width;  // 0..1
    const py = (y - rect.top) / rect.height; // 0..1
    const ry = (px - 0.5) * (maxTilt * 2);   // left/right
    const rx = (0.5 - py) * (maxTilt * 2);   // up/down
    card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
    card.classList.add('tilt');
  }

  function onLeave() {
    card.classList.remove('tilt');
    card.style.removeProperty('--rx');
    card.style.removeProperty('--ry');
  }

  card.addEventListener('pointermove', onMove);
  card.addEventListener('pointerleave', onLeave);
  card.addEventListener('touchend', onLeave, { passive: true });
})();

function callNumber(number) {
  try {
    window.location.href = 'tel:' + number;
  } catch (e) {
    alert('Unable to open dialer. Please call manually: ' + number);
  }
}
function whatsappNumber(number) {
  // WhatsApp API expects only digits, no spaces or plus
  const phone = number.replace(/\D/g, '');
  try {
    window.open('https://wa.me/' + phone, '_blank');
  } catch (e) {
    alert('Unable to open WhatsApp. Please message manually: ' + phone);
  }
}