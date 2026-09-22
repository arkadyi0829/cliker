let score = 0;
let clicks = 0;
let startTime = Date.now();

const scoreEl = document.getElementById('score');
const cpsEl = document.getElementById('cps');
const clickBtn = document.getElementById('clickBtn');
const resetBtn = document.getElementById('resetBtn');

function updateScore() {
    scoreEl.textContent = score;
}

function updateCPS() {
    const seconds = (Date.now() - startTime) / 1000;
    const cps = seconds > 0 ? (clicks / seconds).toFixed(2) : 0;
    cpsEl.textContent = cps;
}

clickBtn.addEventListener('click', () => {
    score++;
    clicks++;
    updateScore();
    updateCPS();
});

resetBtn.addEventListener('click', () => {
    score = 0;
    clicks = 0;
    startTime = Date.now();
    updateScore();
    updateCPS();
});