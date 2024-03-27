const express = require('express');


const app = express();

app.get('/', (req, res)=>{
  req.send('Server working..')
})

const port = process.env.PORT || 3000;


app.listen(port, ()=>{
  console.log('Running')
})