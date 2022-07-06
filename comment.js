const express = require('express');
const router = express.Router();
const pool = require('./database.js')

router.use(function(req, res, next) {
  next();
});


// 댓글 작성 - 회원 id, 게시물 id, 댓글 내용

router.post('/create', function(req, res) {
	// 넣기
	const queryText = `
	insert into post (
		account_id, board_id, comment_contents
	) values (
		'${req.body.account_id}', '${req.body.board_id}', '${req.body.comment_contents}'
	)`
    pool.query(queryText)
	.then((result)=>{
		res.send('댓글 작성 완료')
	})
	.catch((error)=>{
        console.log(error)
		res.send('댓글 작성 실패')
	})
});


// 댓글 조회 - 회원 id, 게시물 id, 댓글 내용

router.get('/read/', function(req, res) {
	// 가져오기
	const queryText = `
	select *
    from post;
    `
    pool.query(queryText)
	.then((result)=>{
		res.send('댓글 조회 완료')
	})
	.catch((error)=>{
        console.log(error)
		res.send('댓글 조회 실패')
	})
});

module.exports = router;