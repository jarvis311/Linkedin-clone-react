const router = require("express").Router();
const user = require("../models/usersModal");
const bcrypt = require('bcrypt')
const jwt =  require('jsonwebtoken')


// register 
router.post("/",async (req,res) => {
    try {
        const {email, password, name, photourl} = req.body;


        // validation
        if(!email || !password || !name || !photourl ){
            return res.status(400).json({errorMessage:"Please fill al Require feaild"});
        }
        if(password.length < 6){
            res.status(400).json({errorMessage:"Password length is more than five char"});
        }

        const duplicateUser = await user.findOne({email});
        if(duplicateUser){
            res.status(400).json({errorMessage:"User is already exist"});

        }

        // password hash
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save user
        const newUser = new user({
            email, 
            name,
            passwordHash,
            photourl
        })

        const saveUser = await newUser.save();

        // token 
        const token = jwt.sign({
            user:saveUser._id
        }, process.env.JWT_SECRET
        ); 

         res.cookie("token", token, {
            httpOnly:true,
        }).send();  
        


        //  catch
    } catch (error) {
        console.error(error);
        res.status(500).send();

    }
})


// Login user



router.post('/login', async (req, res) => {
    try {
        const {email, password } = req.body;

        if(!email || !password ){
            return res.status(400).json({errorMessage:"Please fill al Require feaild"});
        }
        if(password.length < 6){
            res.status(400).json({errorMessage:"Password length is more than five char"});
        }

        const existUser = await user.findOne({email});
        if(!existUser){
            return res.status(401).json({errorMessage:"Email or password is wrong"});
        }
        
        const correctPassword = bcrypt.compare(password, existUser.passwordHash); 
        if(!correctPassword){
            return res.status(401).json({errorMessage:"Email or password is wrong"});
        }
        return res.json(existUser)

        // token 
        // const token = jwt.sign({
        //     user:existUser._id
        // }, process.env.JWT_SECRET
        // ); 
        
        // res.cookie("token", token, {
        //     httpOnly:true,
        //     secure: true,
        //     sameSite: "none",
        // }).send();

        

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

// logout

router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        httpOnly:true,
        expires: new Date(0)
    }).send() 
})

// check if user is logged in or not



 router.get("/logedin", (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.send(false);
        
        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true);
      } catch (err) {
        res.send(false);
      }
  });
 



module.exports = router;