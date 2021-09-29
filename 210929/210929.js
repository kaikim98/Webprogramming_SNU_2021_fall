// Scope
function abc (){
    let a = 0;
    let b = a+3;
    return b;

}
abc();
console.log(a) // => 변수는 선언된 블록 안에서 접근 가능


let cnt =0;
function plus3(){
    let cnt=0;
    cnt = cnt+3;
}
plus3()
console.log(cnt) // ans : 0. 만일 function 내부의 let cnt = 0이 없었다면 3으로 return. 선언이 늦게 될수록 우선됨

const func1 = () => {
    const func2 = n => n+1;
    console.log(func2(3))
}
// function 안에 function 사용 가능
// func2는 func1 내부에서 정의된 것이므로 외부에서 사용 불가


// array를 받아서 -> 전체 합을 리턴하는 함수
const sumOfArray = (arr) => {
    let sum=0;
    //while(arr.length > 0)
    //    sum = sum + arr.pop();
    for(const elem of arr){
        if (isNaN(elem)) throw new Error('Input must be a number');
        sum = sum + elem;
    }
    return sum

}

const arr = [1, 2 ,3 ,4, 5, 6];
const result = sumOfArray(arr);
console.log(result)
console.log(arr)

// Recursive function
const fib =(n) =>{
    if(n===1 || n===2) return 1;

    return fib(n-1) + fib(n-2);
}

console.log(fib(5))
