// 1 - 1 : boolean -> immutable
// 1 - 2 : [15]
// 1 - 3 : 7. func2에 의해 func가 바뀜
// 1 - 4 : NaN은 숫자 아닌것 판별하는 용도이므로 arr = {2, {a:1, nan:true},4}
// immutable => number, boolean, string, undefined, null || let a = 3; const b= a; a = a+1; ==> b=3
// mutable => object, array, function || a = {}; b = a; a.nan=1; ==> b.nan =1
// 1 - 5  : 돌리기 시작할 때 arr.pop이 적용되므로 7+5+3+1
// 1 - 6 : arr.splice(2,3) => 2번째부터 3개 가져옴. splice 사용시 array 자체가 변조되므로 arr2 = [1, 2] 나옴, slice는 원본훼손 안됨. arr = [1, 2]
// splice, pop은 원본 훼손
// 1 - 7 : 42 => 1*2 +1 ; 3*2 + 2 ;;;;;
// 1 - 8 : 1) true ; 2) false; 3) forEach의 두번째는 index 나타냄. book3은 book이 가리키는 것을 나타내므로, book3의 name을 바꾸면 book의 name도 바뀜
// 1 - 9 : true .. 안나옴

// 2 - 1 : 27. Recursive한 형태
// 2 - 2 : concat => array끼리 합함. 원본 훼손 X 시험 나오지 X
// 2 - 3

// 3 - 1
const fib = (i) => {
    if (i===1 || i ===2)
        return 1;
    return fib(i-1) + fib(i-2)
}
const fibArray = (i) => {
    const res = [];
    for(let j=1; j<=i; j++){
        res.push(fib(j))
    }
    return res;
}

// 3 - 2

const mergeArray = (arrOfArr) => {
    const res = [];
    arrOfArr.forEach(arr => {
        arr.forEach(elem => {
            let exist = false;
            for(let i=0; i<res.length; i++){
                if(res[i] === elem){
                    exist = true;
                    break;
                }
            }
            if (!exist) res.push(elem)
        })
    })
}

// 아니면
const mergeArray1 = (arrayOfArr) => {
    const res = [];
    arrayOfArr.forEach(arr => {
        arr.forEach(elem => {
            if (res.indexOf(elem) === -1) res.push(elem);
        })
    })
    return res
}

// 시험범위에 모듈은 제외. javascript만 들어감