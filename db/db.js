const mongoose = require('mongoose')
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL,  {
     useFindAndModify: false ,
    useNewUrlParser: true,
    useCreateIndex: true,
})