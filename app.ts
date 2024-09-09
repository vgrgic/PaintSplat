document.getElementById('start')!.addEventListener('click', startGame);
document.getElementById('submit')!.addEventListener('click', submitAnswer);
document.getElementById('answer')!.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

let level: number;
let numberOfCorrect = 0;
let numberOfIncorrect = 0;
let firstNumber: number;
let secondNumber: number;

function startGame(): void {
    const levelElement = document.getElementById('level') as HTMLSelectElement;
    level = parseInt(levelElement.value);
    document.getElementById('game')!.style.display = 'block';
    generateQuestion();
}

function generateQuestion(): void {
    firstNumber = getRandomInteger(level);
    secondNumber = getRandomInteger(level);
    const questionElement = document.getElementById('question')!;
    const answerElement = document.getElementById('answer') as HTMLInputElement;
    const feedbackElement = document.getElementById('feedback')!;

    questionElement.textContent = `${firstNumber} x ${secondNumber} = `;
    answerElement.value = '';
    feedbackElement.textContent = 'please answer';
}

function submitAnswer(): void {
    const answerElement = document.getElementById('answer') as HTMLInputElement;
    const answer = parseInt(answerElement.value);
    const feedbackElement = document.getElementById('feedback')!;
    const correctElement = document.getElementById('correct')!;
    const incorrectElement = document.getElementById('incorrect')!;

    if (answer === firstNumber * secondNumber) {
        numberOfCorrect++;
        feedbackElement.textContent = 'Correct!';
    } else {
        numberOfIncorrect++;
        feedbackElement.textContent = `Wrong! Correct answer is: ${firstNumber * secondNumber}`;
    }

    correctElement.textContent = numberOfCorrect.toString();
    incorrectElement.textContent = numberOfIncorrect.toString();
    generateQuestion();
}

function getRandomInteger(level: number): number {
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
