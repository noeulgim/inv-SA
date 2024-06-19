function genRandomNumbers() {
    var gameNum = [];
    while (gameNum.length < 3) {
        var num = Math.floor(Math.random() * 10);
        if (!gameNum.includes(num)) {
            gameNum.push(num);
        }
    }
    return gameNum;
}

var cpuNumbers = genRandomNumbers();
var attempts = 0;

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
    var userGuess = document.getElementById('userGuess').value;
    if (userGuess.length !== 3 || isNaN(userGuess)) {
        document.getElementById('result').innerText =
            '유효한 세자리를 입력하세요.';
    }

    attempts++;
    var result = refereeGame(cpuNumbers, userGuess);
    document.getElementById(
        'attempts'
    ).innerText = `${attempts}번째 시도 : ${userGuess}`;
    document.getElementById(
        'result'
    ).innerText = `${result.balls}B${result.strikes}S`;

    if (result.strikes === 3) {
        document.getElementById(
            'result'
        ).innerText += `${attempts}번 만에 맞히셨습니다. 게임을 종료합니다.`;
        document.getElementById('userGuess').disabled = true;
    }
}
