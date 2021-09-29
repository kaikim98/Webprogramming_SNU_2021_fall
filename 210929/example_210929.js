// Exercise 1
const func1 = (arr) => {
    let ans = 0;
    for(const elem of  arr){
        ans += elem % 3;
    }
    return ans;
}
console.log(func1([4,3,6,2]))

// Exercise 2
const func2 =(json1, json2) => {
    let arr3 = [];
    let a = Object.keys(json1);
    let b = Object.keys(json2);
    for(const elem of a){
        if(b.includes(elem) === false) {
            let x = json1[elem]
            arr3[elem] = x;
        }
    }
    return arr3;
}
// Exercise 3
const func3 =(arr) => {
    let ans = []
    for(const arr1 of arr){
        if(arr1['age'] > 30){
            ans.push(arr1['name'])
        }
    }
    return ans;
}

// Exrcise 4
const func4 =(arr) => {
    let ans1 = 0;
    let ans2 = [];
    let ans3 = [];
    for(const arr1 of arr){
        if(arr1.length > ans1){
            ans1 = arr1.length;
        }
    }

    for(const arr2 of arr){
        if(arr2.length === ans1){
            ans2.push(arr2)
        }
    }
    let i = ans2.length + 1;
    let x = 0;
    while(x < i){
        let ans = 0;
        for(const arrx of ans2){
            ans += arrx[x]
        }
        ans3.push(ans)
        x += 1;
    }
    return ans3;
}

// Exercise 5
const func5 =(str) => {
    const words = str.split(' ');
    let ans1 = 0;
    let ans2 = [];
    for(const word of words){
        if(word.length > ans1){
            ans1 = word.length
        }
    }
    for(const word1 of words){
        if(word1.length === ans1){
            ans2.push(word1)
        }
    }
    let x = ans2[0][2];
    return x;
}