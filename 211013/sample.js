const func1 = (obj, result) => {
    const keys = Object.keys(obj)
    console.log(result)

    result = result.concat(keys)
    console.log(result)

    return keys.length
}

const obj1 = {a:'a', b:'b',c:'c'}
const obj2 = {a:'d', b:'e'}
let res = []
res.push(func1(obj1, res))
console.log(res)
res.push(func1(obj2, res))

console.log(res)