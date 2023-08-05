const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://saatvik18:anamika01@cluster0.4bwyark.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
