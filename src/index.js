//Framework
const express = require('express')

const port = 3001
const app = express()

app.use(express.json())



//Run server
app.listen( port, ()=>{
    console.log(`Server run on port ${port}`)
})