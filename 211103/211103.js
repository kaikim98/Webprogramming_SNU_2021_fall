// setTimeout : 첫번째 인자로 함수, 두번째 인자로 시간 받음(ms단위)
setTimeout(()=>{
    console.log('hello world!')
}, 2000)
console.log('hello world! 2')

// node-fetch : http request 보내는 함수
// axios : http request 보내는 함수
const axios = require('axios');

const axiosPromise = axios.get('https://github.com')
    .then(res =>{
        console.log(res)
    }) // 순서 상 어떤 명령 뒤에 다른 명령이 뒤따라와야하는 경우 사용
// console.log(axiosPromise)
console.log(1)


// Callback : 함수를 인자로 넘겨, 해당 asynchronous job이 끝날 경우 해당 function 실행
// 대표적인 예 : setTimeout

const fs = require('fs')
const fileName = './data.txt'
fs.writeFile(fileName, 'Hello', (err)=> {
    if (err !== null){
        console.error(error, err);
        return;
    }
    fs.readFile(fileName, 'utf-8',(err,data) =>{
        if (err !== null){
            console.error(err);
            return;
        }
        console.log(data)

        fs.unlink(fileName, (err)=>{
            if (err !== null){
                console.error(err);
                return;
            }
        })
    })
});

// read와 write를 따로 선언해서 실행할 경우 write가 read보다 먼저 실행완료될 보장이 없으므로 위와 같이 코드 짜는게 편함
// 선후관계 잘 따져서 코드 안에 코드 넣는 등의 선택해야함
// 하지만 error 처리가 깔끔하지 않고, async call 할때마다 indentation 들어감(이를  피하려면 function을 define해서 사용해야함)
// 논리적 흐름을 따라가기 힘듦


// Promise
// axios.get을 하면 promise 만들어지고, get의 성공여부 따라 promise 상태 결정됨
// 실패처리를 하고 싶을 때 reject처리 해주면 밑의 catch로 넘어감
const axios = require('axios')
const axiosPromise = axios.get('https://resources.github.com/faq/');
console.log(axiosPromise)
// pending 상태의 promise가 나옴
// const axios = require('axios')

const texts = [];
const axiosPromise = axios.get('https://rd.pu')
    .then((res)=> {
        texts.push(res.data.length);

        return axios.get('http://naver.com')
    })
    .then((res) =>{
        texts.push(res.data.length);

        return axios.get('http://google.com')
    })
    .then((res) =>{
        texts.push(res.data.length);

        console.log(texts);
    })
    .catch(err => {
        console.error(err)
    })
console.log(axiosPromise)
// 정상적으로 url 불러오면 then 이후 명령들 실행됨
// 실패하면 catch이후 명령들 실행됨


// Async - Await
const promise = new Promise(function(resolve, reject){
    setTimeout(() =>{
        resolve('foo');
    }, 1000)
})

const func1 = async() => {
    try {
        const axiosRES = await axios.get('https://github.com');
        console.log(axiosRES.status);
        return axiosRES.status;
    } catch (e) {
        console.log(e);
    }

}
func1();
// promise 함수 이후 실행
