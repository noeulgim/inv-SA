// function genRandomNumbers() {
//     var gameNum = [];
//     for (var i = 0; gameNum.length < 3; i++) {
//         var num = Math.floor(Math.random() * 10);
//         if (!gameNum.includes(num)) {
//             gameNum.push(num);
//         }
//     }
//     return gameNum;
// }

// let randomNumbers = genRandomNumbers();
// console.log(randomNumbers);

let cpuNumbers = [1, 3, 2];

let testCases = [
    { userNumbers: [2, 5, 6], expected: { strikes: 0, balls: 1 } },
    { userNumbers: [6, 7, 8], expected: { strikes: 0, balls: 0 } },
    { userNumbers: [2, 5, 3], expected: { strikes: 0, balls: 2 } },
    { userNumbers: [1, 3, 2], expected: { strikes: 3, balls: 0 } },
    { userNumbers: [1, 2, 3], expected: { strikes: 1, balls: 2 } },
];

function runTests() {
    testCases.forEach((test, index) => {
        let result = refereeGame(cpuNumbers, test.userNumbers);
        console.log(`Test Case ${index + 1}`);
        console.log(`User Numbers : ${test.userNumbers}`);
        console.log(
            `Expexted: ${JSON.stringify(test.expected)}, Got : ${JSON.stringify(
                result
            )}`
        );
        console.log(
            result.strikes === test.expected.strikes &&
                result.balls === test.expected.balls
                ? 'pass'
                : 'fail'
        );
        console.log('-----------------------------------------');
    });
}

function refereeGame(cpuNumbers, userNumbers) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        if (userNumbers[i] == cpuNumbers[i]) {
            strikes++;
        } else if (cpuNumbers.includes(parseInt(userNumbers[i]))) {
            balls++;
        }
    }
    return { strikes, balls };
}

runTests();
