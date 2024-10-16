const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('./intro',(req, res)=>{
    res.send('intro works too')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})