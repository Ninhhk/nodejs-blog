const express = require('express')
const app = express()
const port = 3000
// route
app.get('/', (req, res) => {
    var a =1;
    var b= 23;
    var c= a+2-b;
  res.send('Hello World!') 
})
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})