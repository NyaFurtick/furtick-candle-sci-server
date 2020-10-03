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
  //fizzbuzz logic
    num = parseInt(num, 10);
    if ((num % 3 === 0) && (num % 5 === 0)){
      res.send('FizzBuzz');
    }
    else if (num % 3 === 0) {
      res.send('Fizz');
    }
    else if (num % 5 === 0) {
      res.send('Buzz');
    }
    else{
      res.send(`${num}`);
    }
  } // end if-else

  res.end();
});

// running server
app.listen(port, function(){
  console.log(`Server listening on port ${port}`);
});
