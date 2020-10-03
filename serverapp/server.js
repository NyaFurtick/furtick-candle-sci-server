//access Express framework
const express = require('express');
// create server
const app = express();
const port = 3000;

// get requests
app.get('/', function(req, res){
  res.send('the server is running')
});

// running server
app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
});
