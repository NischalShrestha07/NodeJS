const { name } = require('ejs')
const express=require('express')
const { blogs } = require('./model/index')
const { todos } = require('./model/index')
const app=express()

require("./model/index")

app.set('view engine','ejs')

// MULTER CONFIG
const {multer,storage}=require('./middleware/multerConfig')
const upload=multer({storage:storage})

// important remember this hai sab ma chainxa
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.get('/',(req,res)=>{
// res.send("This is a home page")
// })
app.get('/',(req,res)=>{
// res.render('./views/home.ejs') this throws errors 


// res.render('home.ejs')
res.render('home',{name:'Nischal',age:'21'})
})


// res.send(`<h1>This is about page</h1><h2>This is h2</h2><img src="/static/images/goku.png">`)
app.get('/about',(req,res)=>{
res.send(`<h1>This is about page</h1><h2>This is h2</h2><img src="goku.jpeg" alt="photo">`)
})

app.get('/blog',(req,res)=>{
// res.send("Welcome to blog page")
res.render('blog')
}) 

// rest apis
app.get('/createblog',(req,res)=>{
// res.send("So, this is a create blog")
res.render("createblog")
})

// **************************************
app.get('/todo',(req,res)=>{
res.render("todo")
})
//*************************************** */


app.get('/welcome',(req,res)=>{ 
// res.send("So, this is a create blog")
res.render("welcome")
})

app.get('/create/blog',(req,res)=>{
res.send("So, this is a inside create then blog")
})

// restful apis
app.get('/blog/edit',(req,res)=>{
// res.send("So, Here we will gona do editing")
res.render('editblog')
})
// app.get('/welcome',(req.res)=>{
//     res.render('welcome')
// })



// BACKEND PART 
// upload wala middleware ho
// for multiple files instead of single use array

app.post('/blog',upload.single('image'),  async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    // const title=req.body.title
    // const subtitle=req.body.subtitle
    // const description=req.body.description
    const {title,subtitle,description}=req.body
   await  blogs.create({
        title:title,
        subTitle:subtitle,
        description:description,
        imageUrl:req.file.filename
    })
    res.redirect("/")
})



// ***************************************
app.post('/todo',async(req,res)=>{
    console.log(req.body);
    const {title,subtitle,description}=req.body
   await todos.create({
        title:title,
        subtitle:subtitle,
        description:description
    })
    res.redirect("/")
})

// ***************************************




app.listen(3000,()=>{
    console.log("Server has started at port 3000");
})

//1.nodemon
//2. node --watch app.js  then when we refresh it will work
