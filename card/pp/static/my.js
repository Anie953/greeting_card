
function openCard() {
  document.getElementById('cardFront').style.display = 'none';
  document.getElementById('cardInside').style.display = 'flex';
  
  // Play background music
  const music = document.getElementById('bgMusic');
  music.volume = 0.5;
  music.play();
}

function throwConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

function getRandomColor() {
  const colors = ['#ff69b4', '#ff6347', '#ffd700', '#4CAF50', '#1E90FF'];
  return colors[Math.floor(Math.random() * colors.length)];
}
