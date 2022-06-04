const express= require('express')
const dotenv= require('dotenv');
const  connectDB  = require('./config/db');
const pinRoutes = require('./routes/pins')
const userRoutes = require('./routes/user')
const cors = require('cors')


//env config
dotenv.config()
//DB connection
connectDB()

//App Express
const app = express()

//MiddleWere
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

//PORT  
const PORT =process.env.PORT || 3000;

//use Routes
app.use('/api/users', userRoutes)
app.use('/api/pins', pinRoutes)

app.listen(PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`);
}) 