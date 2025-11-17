const express=require('express')
const router = express.Router()

router.use(logger)

router.get("/", (req,res)=>{
    res.send("user List")
})

router.get("/new", (req,res)=>{
    res.send("Users New Form")
    
})

router.post('/', (req,res)=>{
    res.send(`Create User`)
    })

router
    .route("/:id")
    .get('/:id', (req,res)=>{

    req.params.id
    res.send(`Get user with ID ${req.params.id}`)
    })
    .put("/:id", (req,res)=>{
    res.send(`Update user with ID ${req.params.of}`)
    })
    .delete('/:id', (req,res)=>{
    req.params.id
    res.send(`Delete user with ID ${req.params.id}`)
    })
const users=[{name:"ALI"}, {name:"Maha"}]
router.param("id", (req,res,next,id)=>{
        req.user=users[id]
        next()
    })
module.exports = router