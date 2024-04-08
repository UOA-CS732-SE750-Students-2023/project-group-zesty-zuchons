'use strict';
require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user_info = require("./models/user");

// todo: implement webauthn with this project

const app = express();
const port = process.env.PORT || 3001;

//Setting up JSON body parser
app.use(express.json());
app.use(cors());

//Setting up routes
app.use("/", routes);

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

//database server address "mongodb+srv://zzq961213:Aa12345678@cluster0.5ewkh2k.mongodb.net/database"
mongoose
  .connect('mongodb+srv://zzq961213:Aa12345678@cluster0.5ewkh2k.mongodb.net/database', { useNewUrlParser: true })
  .then((result) => {
    console.log("MongoDB connection successful");
  })
  .then(() => {
    app.use(
      '/',
      swaggerUi.serve, 
      swaggerUi.setup(swaggerDocument)
    );
    app.listen(port, () => {
      console.log(`App server listening on port ${port}!`);
      console.log(`Test the api on swagger: http://localhost:${port}`)}
    );
  })
  .catch((error) => {
    console.log("MongoDB connection failed : ", error.message);
  });


// user_infos entity defined
// const Schema = mongoose.Schema;
// //the some of the variable name are not defined
// const userSchema = new Schema({
//   userEmail:String,
//   familyName:String,
//   givenName:String,
//   userData:Object,
// });
// const user_info = mongoose.model('user_info', userSchema);

//createUserInfo
app.post('/createUserInfo', (req, res) => {
  createUserInfo(req.body);
  res.send('Creation finished!');
  });

app.get('/getUserInfo/:email', async (req, res) => {
  const {email} = req.params;
  const user = await getUserInfo(email);
  console.log(user);
  return res.json(user);
  });

app.post('/updateUserInfo', (req, res) => {
  //use the test data to test back-end server connection
  updateUserInfo(req.body);
  res.send('updation finished!');
  });
  
async function createUserInfo(userInfo){
  const newUserInfo = new user_info(userInfo);
  //check if the user has been created
  const user = await getUserInfo(newUserInfo.userEmail);
  if(user === undefined || user === null){
    console.log("Start to create new user")
    await newUserInfo.save();
    console.log("Creation finished!")
  }else {
    console.log("The user has already been created!")
  }
};

async function getUserInfo(email){
  console.log("Start to finding the user with google email: "+email);
  const user = await user_info.findOne({ userEmail: email });
  console.log(user);
  return user;
};

async function updateUserInfo(userInfo){
  console.log("Start to updating the user with google email: "+userInfo.userEmail);
  await user_info.findOneAndUpdate({ userEmail: userInfo.userEmail }, userInfo);
  console.log("Updation finished!")
};
