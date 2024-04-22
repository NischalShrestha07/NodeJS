

const multer=require('multer')

//cb means callback function have two parameter (error,success)
const storage=multer.diskStorage({
destination:function(req,file,cb)    
{
    cb(null,'./storage')
},
// destination vanna le ka halna kojya


filename:function(req,file,cb)   {
    cb(null,Date.now()+'-'+file.originalname)
}
})


module.exports={
    multer,
    storage
}