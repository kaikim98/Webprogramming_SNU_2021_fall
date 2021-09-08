// JS에서는 camel case 사용

// let : 할당된 변수 바꿀 수 있음
let user = 'Go';
console.log(user);

// const : 할당된 변수 바꿀 수 없음
const lectureName = 'webprogramming';
console.log(lectureName);
const arrr = [];
for(let i=0;i<10;i++){
    arrr.push(i);
} // 이 경우 const는 저장공간을 할당하는 것이기에, array 안의 요소는 변경가능.

// 변수의 종류
// Number
let numberOfStudent = 4; // JS에서는 int, float이 아닌 Number가 있음

// String
let str = 'hello';
str.substr(0,2); // output : hel
let str2 = str + 'everyone'; // string에서 덧셈 연산 가능
let z = `${str}`; // template 사용시 ` ` 사용

// Boolean
1 == '1' // 두 변수의 종류가 다르면, 변수를 맞추어 비교(string으로)
1 ==='1' // 두 변수가 같은지 확인
1 !== '1' // 두 변수가 다른지 확인
&& // and(양 변이 true일때만 true 출력)
|| // or
! // not

// Array
let users = ['a', 'b', 'c'];
let arr = [1, 'aa', false]; // array 안에 다른 종류의 변수가 들어갈 수 있음(boolean, number, string 혼합되어 들어갈 수 있음)
arr.push('D') // array 마지막에 변수 삽입
arr.pop() // array 마지막의 변수 삭제

// Object : key =>  value 형태로 선언
let user = {name:'bob',
            height:180.3,
            age:24}
user.name // output : 'bob'
user['name'] // output : 'bob'

// If 조건문
const arr3 = [1, 2, 3, 4, 5, 6];
if (arr3.length > 4){
    console.log('arr3\`s length is larger than 4');
}
else if(arr3.length ===3){
    console.log('arr\`s length is 3')
}
else{
    console.log(arr3)
}

// 반복문
// while 반복문
let i = 0;
while(i < 10){
    console.log(i);
    i = i+1
}

// for 반복문
for(let i=0;i<10;i++){
    console.log(i)
}
