const express = require('express');
const router = express.Router();

router.use(express.json()); 

//주문하기
router.post('/', (req,res) => { 
    res.json('주문 성공');
})

//주문 목록 조회
router.get('/', (req,res) => { 
    res.json('주문 목록');
})

//주문 목록 조회
router.get('/:id', (req,res) => { 
    res.json('주문 목록 상세 조회');
})



module.exports = router