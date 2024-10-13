const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const  multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');

app.use(express.json());
app.use(cors());

//Database connect with mongoDB
mongoose.connect("mongodb+srv://ayushkumar8418:ayushkumar8418@cluster0.ok5my1s.mongodb.net/e-commerce")

//Api Creation
app.get("/" , (req,res) => {
    res.send("Express app running on port 4000")
})

//image storage engine
const storage = multer.diskStorage({
    destination : './upload/images',
    filename : (req,file,cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload endpoint for images
app.use('/images' , express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product
const Product = mongoose.model("Product",{
    id:{type:Number , required:true},
    name:{type:String , required:true},
    image:{type:String , required:true},
    category:{type:String , required:true},
    new_price:{type:Number , required:true},
    old_price:{type:Number , required:true},
    date:{type:Date , default:Date.now},
    available:{type:Boolean , default:true}
})

app.post('/addproduct' , async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id = 1;
    }

    const product = new Product({
        id : id,
        name : req.body.name,
        image : req.body.image,
        category : req.body.category,
        new_price : req.body.new_price,
        old_price : req.body.old_price
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })

})

// Creating Api for deleting product
app.post('/removeproduct' , async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("reoved");
    res.json({
        success:true,
        name:req.body.name
    })
})

// Creating api for getting all products
app.get("/allproducts" , async(req,res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})



//Schema creation for user model
const Users = mongoose.model('Users',{
    name:{type:String},
    email:{type:String , unique:true},
    password:{type:String},
    cartData:{type:Object},
    date:{type:Date , default:Date.now}
})

//Creating endpoint for registering the user'
app.post('/signup' , async(req,res) => {
    
    let check = await Users.findOne({email : req.body.email});
    if(check){
        return res.status(400).json({Success:false , error:"Existing user found with same email id..."})
    }

    let cart = {};
    for(let i=0 ; i<300 ; i++){
        cart[i] = 0;
    }
    
    const user = new Users({
        name:req.body.userName,
        email: req.body.email,
        password : req.body.password,
        cartData : cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data , 'secret_ecom');

    res.json({success:true , token});

})




//creating endpoint for user login
app.post('/login' , async (req,res) => {
    let user = await Users.findOne({email : req.body.email});

    if(user){
        const passCompare = (req.body.password === user.password);
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true , token})
        }
        else{
            res.json({success: false  , error:"Wrong Password"})
        }
    }
    else{
        res.json({success:false , errors:"wrong email Id"})
    }

})

// Creating middleWare to fetch user
    const fetchUser = async (req,res,next)=> {
        const token = req.header('auth-token');
        if(!token){
            res.status(401).send({errors : "Please authenticate using valid token"})
        }
        else{
            try{
                const data = jwt.verify(token,'secret_ecom');
                req.user = data.user;
                next();
            }catch(error){
                res.status(401).send({errors:"please authenticate using a valid token"})
            }
        }
    }

//adding product in cart
app.post('/addtocart' , fetchUser , async(req,res) => {
    console.log("A" , req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")

}) 

//removing product from cart
app.post('/removefromcart' , fetchUser , async(req,res) => {
    console.log("r" , req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")

})

// Creating api for getting user cart
app.post("/getCart" ,fetchUser,  async(req,res) => {
    console.log("all users cart fetched");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData)
})


app.listen(port , (error)=>{
    if(!error){
        console.log("Server running at port " , port);
    }else{
        console.log("error: " + error);
    }
})
