const express = require('express');
const router = express.Router();
const pool = require('./database.js')

router.use(function(req, res, next) {
  next();
});


// 게시물 작성 - 회원 id, 제목, 내용

router.post('/create', function(req, res) {
	// 넣기
	const queryText = `
	insert into post (
		account_id, post_title, post_contents
	) values (
		'${req.body.account_id}', '${req.body.post_title}', '${req.body.post_contents}'
	)`
    pool.query(queryText)
	.then((result)=>{
		res.send('게시물 작성 완료')
	})
	.catch((error)=>{
        console.log(error)
		res.send('게시물 작성 실패')
	})
});


// 게시물 조회 - 회원 id, 제목, 내용

router.get('/read', function(req, res) {
	// 가져오기
	const queryText = `
	select *
    from post;
	`
    pool.query(queryText)
	.then((result)=>{
        // console.log(result.rows)
		res.send(result.rows)
	})
	.catch((error)=>{
        console.log(error)
		res.send('게시물 조회 실패')
	})
});


// 게시물 상세 조회

router.get('/read/:post_id', function(req, res) {
	// 가져오기
	const queryText = `
	select *
    from post;
	`
    pool.query(queryText)
	.then((result)=>{
		res.send(result.rows)
	})
	.catch((error)=>{
        console.log(error)
		res.send('게시물 상세 조회 실패')
	})
});


// 특정 게시물 수정

router.put('/update:post_id', function(req, res) {
	// 수정하기
	let foundIndex = post.findIndex(p => p.id === req.params.id);
    if (foundIndex === -1) {
		res.status(404).json({ errorMessage: "게시물 수정 실패"});
	}
	else {
		post[foundIndex] = {...post[foundIndex], ...req.body};
		res.json(post[foundIndex]);
	}
	
	});


// 특정 게시물 삭제

router.delete('/delete:post_id', function(req, res) {
	// 삭제하기
	const queryText = `
	delete  
    from post;
	`
    pool.query(queryText)
	.then((result)=>{
		res.send('게시물 삭제 완료')
	})
	.catch((error)=>{
        console.log(error)
		res.send('게시물 삭제 실패')
	})
});

module.exports = router;