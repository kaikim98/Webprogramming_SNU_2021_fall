// // 반복 : 언제까지 뭘 계속 할 것인가
let a = 10;
while(a>0){
    console.log(a);
    a -= 1
}
//
// // 초기화 ; 반복 조건; 탈출 못했을 시 수행 할 것
for(let i=10;i>0;i=i-1){
    if(i===5){
        continue;
    }
    if(i===3){break}
    console.log(i);
}

for(let i=0;i<5;i=i+1){
    for(let j=0;j<10;j=j+1) {
        console.log(`${i} - ${j}`)
    }
}

// // Exercise 1 : print 1+2+....+100
let b = 0
for(let i=1;i<101;i=i++){
    b = b+i;
}
console.log(b);

// // Exercise 2 : print *
// // sol 1
for(let i=1; i<7;i=i++){
    let str ='';
    for(let j=1;j<=i;j++){
        str +='*';
    }
    console.log(str);
}

// // sol 2
for(let i=1;i<=6;i++){
    console.log('*'.repeat(i));
}

// // Function
const func =(x) => {
    return x+1;
}
console.log(func(10));

const arrMultiiplyBy2 =(arr) => {
    const arr2 =[];
    for(let i=0;i<arr.length;i++){
        arr2.push(arr[i]*2);
    }
    return arr2;
}
console.log(arrMultiiplyBy2([1,2]));

function func2(x){
    return x+1;
}

// input 여러개 가능
const plus = (x,y) =>{
    return x+y;
}

function func1(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

// Exercise 3 : map,
function func3(n){
    let ans = [];
    for(let i=0;i<n.length;i++){
        if (n[i]%2===0){ans.push(n[i] * 2+1)}
        else{ans.push(n[i] * n[i])}
    }
    return ans;
}

console.log(func3([1, 4, 6, 11]))

// Exercise 4
function func4(n){
    for(let i=0; i<n;i++){
        console.log(' '.repeat(i)+'A'.repeat(n-i))
    }
}

func4(5)

// input이 하나일 때 괄호 생략 가능
let plus1 = x =>{
    return x+1;
}

// 함수가 한 줄일 때 중괄호 생략 가능
let plus11 = x => x+1;

[1,2,3].map(e=>e+1) // ans : [2, 3, 4]
[1,2,3].map(plus1) // ans : [2, 3, 4]

// null vs undefined
if(undefined) {console.log('hi')} // ans : undefined
if(null) {console.log('hi')} // ans : undefined
if(null===undefined) {console.log('hi')} // ans : undefined
if(null==undefined) {console.log('hi')} // ans : hi

// Primitive value
{} === {} // ans : false
null === undefined // ans : false

