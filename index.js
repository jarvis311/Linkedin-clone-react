const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true
}));

if(process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"))
}

app.listen(PORT, () => console.log(`server chalu : ${PORT}`));

mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser: true,
    useUnifiedTopology: true}
    , (err) => {
    if(err) return console.log(err);
    console.log("Connect to Mongodb!!");
})
//
// 
app.use('/auth', require("./routes/userRoute"))
app.use('/post', require("./routes/postRoute"))