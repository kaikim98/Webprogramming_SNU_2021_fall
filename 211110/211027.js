const express = require('express');
const fs = require('fs');
const app =  express();
const Post = require('./Post')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port = 3000;

const postsFilePath = './posts.json'
const _posts = JSON.parse(fs.readFileSync(postsFilePath, 'utf-8'))
const posts = _posts.map(_post =>
    new Post(_post.id, _post.title, _post.description, _post.isDeleted))
// post => {title, description, isDeleted}
// const posts  = [{
//     id:1,
//     title: 'post1',
//     description: 'post1 description',
//     isDeleted:false
// },{ id:2,
//     title: 'post2',
//     description: 'post2 description',
//     isDeleted:false
// }];


// 글 목록 보여주기 Read
app.get('/posts', (req,res)=> {
    const _posts = posts.filter(post => !post.isDeleted).map(({id, title, description, isDeleted}) => {
        return {
            id, title
        }
    })
    res.send(_posts)
})

// 글 작성 Create
app.post('/posts', (req, res)=> {
    const {title, description} = req.body
    const post = {
        title,
        description,
        id : posts.length + 1,
        isDeleted: false

    }
    posts.push((post))
    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post)
})

//작성 글 보기
// : => dynamic parameter를 의미
app.get('/posts/:id', (req, res)=>{
    const {id} = req.params;
    const post = posts.find(e=> e.id === parseInt(id));
    if (post)
        res.send(post)
    else
        res.sendStatus(404)
})


// 글 업데이트
app.put('/posts/:id', (req, res)=>{
    const {id} = req.params;
    const post = posts.find(e=> e.id === parseInt(id));

    const {title, description} = req.body;
    post.title = title;
    post.description = description;
    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post);
})

// 작성 글 삭제
app.delete('/posts/:id', (req, res)=>{
    const { id } = req.params;
    const post = posts.find(e => e.id === parseInt(id));
    post.isDeleted = true;

    fs.writeFileSync(postsFilePath, JSON.stringify(posts));
    res.send(post);
})

app.listen(port, () => {
    console.log(`listening at port: ${port}...`);
})


//body => post, put 만 쓰는것 추천
//params
//

// 400번대 error : client error, 404 : Not Found Erorr
// 500번대 error : server쪽 error