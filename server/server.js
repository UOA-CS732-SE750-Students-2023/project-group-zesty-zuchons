const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

//Setting up JSON body parser
app.use(express.json());
app.use(cors());

//Setting up routes
app.use("/", routes);

//database server address "mongodb+srv://zzq961213:Aa12345678@cluster0.5ewkh2k.mongodb.net/database"
mongoose
  .connect('mongodb+srv://zzq961213:Aa12345678@cluster0.5ewkh2k.mongodb.net/database', { useNewUrlParser: true })
  .then((result) => {
    console.log("MongoDB connection successful");
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`App server listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.log("MongoDB connection failed : ", error.message);
  });


//user_infos entity defined
const Schema = mongoose.Schema;
//the some of the variable name are not defined
const userSchema = new Schema({
  userName:String,
  userData:{
      documentName:String,
      test1:String,
      test2:String
  }
});
const user_info = mongoose.model('user_info', userSchema);

//createUserInfo
app.get('/createUserInfo', (req, res) => {
  //use the test data to test back-end server connection
  createUserInfo(insert);
  res.send('Creation finished!');
  });

async function createUserInfo(userInfo){
  const newUserInfo = new user_info(userInfo);
  console.log("Start to create new user")
  await newUserInfo.save();
  console.log("Creation finished!")
  return newUserInfo;
};

//this is a test input of creating user info
const insert = {userName: 'test2',userData:{
  documentName:'2222',
  test1:'2222',
  test2:'4444'
}
}