//랜덤숫자생성
let randomNum;
//중복 문자 제거, 3자리 수 만들기
while(true){
	randomNum = Math.random()*10;
	if(Math.floor(randomNum) !== 0){
		break;
	}else{
		randomNum*10;
	}
}
randomNum = [...new Set(String(randomNum).replace('.',''))].join('');
//최종 랜덤숫자
let getRandomNum = randomNum.substring(0,3);

//prompt로 숫자 입력
let input = String(prompt('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!'));
//시도 횟수 변수
let countTry = 0;
//count S 변수
let countS = 0;
//count B 변수
let countB = 0;

//일치할때까지 반복하는 반복문
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
