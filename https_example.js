var https = require('https');

console.log('I did it!')

//Make Request

var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

//make request (VAR that requires).request(HOST, CALLBACK)
https.request(options, callback).end();

console.log("I've made the request!");