const {PostCandidate,GetCandidate} = require("../controllers/controller")

const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("hello world")
})

router.post('/candidate',PostCandidate)

router.get('/candidate',GetCandidate)

module.exports = router