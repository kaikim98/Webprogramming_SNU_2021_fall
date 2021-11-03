const func1 = (arrOrArr) => {
    const length = arrOrArr.reduce((prev,arr)=>Math.min(prev,arr.length),9999)

    const targets = arrOrArr.filter(arr => arr.length ===length)
    const res = new Array(length).fill(1)
    targets.forEach(elem =>{
        elem.forEach((e,i)=>res[i]+=e)
    })
    return res
}
console.log(func1([[1, 2, 3, 4],[5,6],[7,8,89],[1,2,3,4],[6,4,3,1,2]]))