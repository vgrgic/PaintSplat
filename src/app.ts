document.getElementById('start')!.addEventListener('click', startGame);
document.getElementById('submit')!.addEventListener('click', submitAnswer);

let level: number;
let numberOfCorrect = 0;
let numberOfIncorrect = 0;
let firstNumber: number;
let secondNumber: number;

function startGame() {
    level = parseInt((document.getElementById('level') as HTMLSelectElement).value);
    document.getElementById('game')!.style.display = 'block';
    generateQuestion();
}

function generateQuestion() {
    firstNumber = getRandomNumber(level);
    secondNumber = getRandomNumber(level);
    document.getElementById('question')!.textContent = `${firstNumber} x ${secondNumber} = `;
    (document.getElementById('answer') as HTMLInputElement).value = '';
    document.getElementById('feedback')!.textContent = '';
}

function submitAnswer() {
    const answer = parseInt((document.getElementById('answer') as HTMLInputElement).value);
    if (answer === firstNumber * secondNumber) {
        numberOfCorrect++;
        document.getElementById('feedback')!.textContent = 'Correct!';
    } else {
        numberOfIncorrect++;
        document.getElementById('feedback')!.textContent = `Wrong! Correct answer is: ${firstNumber * secondNumber}`;
    }
    document.getElementById('correct')!.textContent = numberOfCorrect.toString();
    document.getElementById('incorrect')!.textContent = numberOfIncorrect.toString();
    generateQuestion();
}

function getRandomNumber(level: number): number {
    switch (level) {
        case 2:
            return Math.floor(Math.random() * 10) + 1;
        case 3:
            return Math.floor(Math.random() * 20) + 1;
        case 4:
            return Math.floor(Math.random() * 40) + 1;
        case 5:
            return Math.floor(Math.random() * 80) + 1;
        default:
            return Math.floor(Math.random() * 5) + 1;
    }
}
