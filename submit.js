const express = require('express');
const router = express.Router();
const pool = require('./database.js')

router.use(function(req, res, next) {
  next();
});


// 대관 / 가입 신청 - 장소 이름, 회원 id

router.post('/create', function(req, res) {
	// 넣기
	const queryText = `
	insert into post (
		account_id, place_name
	) values (
		'${req.body.account_id}', '${req.body.place_name}'
	)`
    pool.query(queryText)
	.then((result)=>{
		res.send('신청 완료')
	})
	.catch((error)=>{
        console.log(error)
		res.send('신청 실패')
	})
});

module.exports = router;