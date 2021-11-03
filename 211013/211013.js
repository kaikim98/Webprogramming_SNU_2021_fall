const teacher = {name:jin, age:23};
const {name, age} = teacher;

const teacher2 = {name, age};

// && ||
let a = 0;
const increment = () => {
    a = a+1;
    return true;
}

if (2 > 3 && increment()){
    console.log('hi')
}
console.log(a);
// && 연산에서 두 조건 만족하지 않으면 함수 실행되지 X => increment 실행되지 않아 a = 0으로 출력. ||연산이었으면 둘다 만족하지 않더라도 increment 실행되어 a= 1 출력

// if 문의 shortcut
let b = 2;
let c = 0;
if(b>3) // if 뒤에 중괄호 없으면 아래 한줄만 실행됨
    c += 1;
else
    c += 2;

// if 뒤에 중괄호 없으면 아래 한줄만 실행됨
if (10 < 8)
    console.log(10)
    console.log(8) // 8만 표시됨

// 위의 if else 대신 아래 식 사용 가능
// 조건문 ? true일 때 : false일 때
b > 3 ? c += 1 : c +=2;
