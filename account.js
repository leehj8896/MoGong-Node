const express = require('express');
const router = express.Router();
const pool = require('./database.js')

router.use(function(req, res, next) {
  next();
});

// 회원가입
router.post('/join', function(req, res) {
	// 넣기
	const queryText = `
	insert into account (
		email, password, name
	) values (
		'${req.body.email}', '${req.body.password}', '${req.body.name}'
	)`
	pool.query(queryText)
	.then((result)=>{
		res.send('가입 성공')
	})
	.catch((error)=>{
        console.log(error)
		res.send('가입 실패')
	})
});

// 로그인
router.post('/login', function(req, res) {
  const queryText = `
	select * from account
	where email = '${req.body.email}'
	`
	pool.query(queryText)
	.then((result)=>{
		const realPassword = result.rows[0].password
		const inputPassword = req.body.password
		// 비밀번호 맞는지 체크
		if (realPassword === inputPassword) {
			res.send('로그인 성공')
		}else {
			res.send('비밀번호 다름')
		}
	})
	.catch((error)=>{
		res.send('이메일 찾을 수 없음')
	})
});


module.exports = router;