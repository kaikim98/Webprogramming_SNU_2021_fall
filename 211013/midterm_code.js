// 1
const fib = (n) => {
    if(n === 1 || n === 2){
        return 1
    }else{
        return fib(n-1) + fib(n-2)
    }

}

const fibAnswer = (n) => {
    let ans = []
    for(let i=1; i<n+1;i++){
        ans.push(fib(i))
    }
    return ans
}

// 2
const returnArr = (arr) =>{
    const arrLength  = arr.length
    let ansArr = []
    for(let i = 0 ; i<arrLength ; i++){
        let arrLength1 = arr[i].length
        for(let j=0;j<arrLength1 ; j++){
            if(ansArr.includes(arr[i][j]) === true){
                continue
            }else{
                ansArr.push(arr[i][j])
            }
        }
    }
    return ansArr
}

// 3
const returnObjectKeys = (object) => {
    let keyOfObject = Object.keys(object)
    const numOfKeys = keyOfObject.length
    let ans = []
    for(let i = 0; i<numOfKeys; i++){
        let keyLength = keyOfObject[i].length
        for(let j = 0 ; j < keyLength ; j++){
            ans.push(keyOfObject[i][j])
        }
    }
    return ans
}