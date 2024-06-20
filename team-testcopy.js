function genRandomNumbers() {
    var gameNum = [];
    for (var i = 0; gameNum.length < 3; i++) {
        var num = Math.floor(Math.random() * 10);
        if (!gameNum.includes(num)) {
            gameNum.push(num);
        }
    }
    return gameNum;
}

var cpuNumbers = genRandomNumbers();

function refereeGame(cpuNumbers, userNumbers) {
    var strikes = 0;
    var balls = 0;

    for (var i = 0; i < 3; i++) {
        if (userNumbers[i] == cpuNumbers[i]) {
            strikes++;
        } else if (cpuNumbers.includes(parseInt(userNumbers[i]))) {
            balls++;
        }
    }
    return { strikes, balls };
}

function playGame() {
    var cpuNumbers = genRandomNumbers();
    var attempts = 0;
    var gameOver = false;

    while (!gameOver) {
        var userGuess = prompt('세 자리 숫자를 입력하세요 :');
        if (userGuess.length !== 3 || isNaN(userGuess)) {
            console.log('유효한 세 자리 숫자를 입력하세요.');
            continue;
        }
        attempts++;
        var result = refereeGame(cpuNumbers, userGuess);
        console.log(`${attempts}번째 시도 : ${userGuess}`);
        console.log(`${result.balls}B${result.strikes}S`);

        if (result.strikes === 3) {
            console.log(`${attempts}번 만에 맞히셨습니다. 게임을 종료합니다.`);
            gameOver = true;
        }
    }
}

playGame();
