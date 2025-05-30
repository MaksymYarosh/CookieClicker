let cookieCount = 0;
let cookiesPerClick = 1;
let autoClicker = false;

const cookieEl = document.getElementById('cookie');
const cookieCountEl = document.getElementById('cookieCount');
const autoClickerBtn = document.getElementById('autoClickerBtn');
const multiplierBtn = document.getElementById('multiplierBtn');

cookieEl.addEventListener('click', () => {
    cookieCount += cookiesPerClick;
    updateDisplay();
});

autoClickerBtn.addEventListener('click', () => {
    if (cookieCount >= 50 && !autoClicker) {
        cookieCount -= 50;
        autoClicker = true;
        setInterval(() => {
            cookieCount += cookiesPerClick;
            updateDisplay();
        }, 1000);
        updateDisplay();
        autoClickerBtn.disabled = true;
        autoClickerBtn.textContent = 'Auto Clicker (Purchased)';
    }
});

multiplierBtn.addEventListener('click', () => {
    if (cookieCount >= 100) {
        cookieCount -= 100;
        cookiesPerClick *= 2;
        updateDisplay();
        multiplierBtn.disabled = true;
        multiplierBtn.textContent = 'Double Click (Purchased)';
    }
});

function updateDisplay() {
    cookieCountEl.textContent = cookieCount;
}
