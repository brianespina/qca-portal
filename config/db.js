const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

async function connectDB(){
    try{
        // mongoose.set('useCreateIndex', true)
        await mongoose.connect(db, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('DB Connected')
    }catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
