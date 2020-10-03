//access Express framework
const express = require('express');
// create server
const app = express();
const port = 3000;

// get request
app.get('/fizzbuzz/:number', function(req, res){
  // get number in url path
  let num = req.params.number;

  //check if number more than 5 digits
  if (num.length > 5){
    res.send(`The number in path is more than 5 digits`);
  }
  else{
    res.send(`${num}`);
  }

});

// running server
app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
});
