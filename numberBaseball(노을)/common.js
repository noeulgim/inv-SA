let randomNum;
while(true){
	randomNum = Math.random()*10;
	if(Math.floor(randomNum) !== 0){
		break;
	}else{
		randomNum*10;
	}
}
randomNum = [...new Set(String(randomNum).replace('.',''))].join('');
let getRandomNum = randomNum.substring(0,3);
let input = String(prompt('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!'));
let countTry = 0;
let countS = 0;
let countB = 0;
while(true){
	countTry++;
	for(var i = 0; i < getRandomNum.length; i++){
		if(getRandomNum[i] == input[i]){
			countS += 1;
		}
		for(var j = 0; j < getRandomNum.length; j++){
			if(getRandomNum[i] == input[j]){
				countB += 1;
			}
		}
	}
	input = prompt(`${countTry}번째 시도 : ${input} , ${countB}B${countS}S , ${getRandomNum}`)
	if(input === getRandomNum){
		alert(`${countTry}번만에 맞히셨습니다. 게임을 종료합니다.`);
		break;
	}
	countS = 0;
	countB = 0;
}
