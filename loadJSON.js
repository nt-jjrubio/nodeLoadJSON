/** @author Juan José Rubio Iglesias **/

var request = require('request-promise');
var bodyParser = require('body-parser');

var fs = require('fs');


/*
var options = {
	host: '127.0.0.1',
	port: '3000',
	path: '/api/getUserToken',
	method: 'POST'
};
*/

var auth = {
	username: '----',
	password: '----'
};

var token = '';
request.post('http://127.0.0.1:3000/api/getUserToken', {form: auth}, function(req,res) {
  //console.log(typeof(JSON.parse(res.body)));
 
  if(res.statusCode === 200)
  {
    //Convertimos el token 
    token = (JSON.parse(res.body).token);
    //console.log(token);
    token = 'Bearer '+token;
    var jsonFile = JSON.parse(fs.readFileSync('atletas.json', 'utf8'));
   
    for(i=0;i<atletas.length;i++)
    {
        var options = { method: 'POST',
          url: 'http://127.0.0.1:3000/api/athlete',
          headers: 
          { 
            'cache-control': 'no-cache',
            authorization: token,
            'content-type': 'application/json' },
          body: jsonFile[i],
          json: true };
        
          request(options, function (error, response, body) {
            console.log(body);
            if (error) {
              console.log(body);
              console.log('Error en ', error);
            } throw new Error(error);

          
        });














































      
      // body = atletas[i];
      // request(options, function (error, response, body) {
      //   if (error) throw new Error(error);
        

      // }, function(req,res){

      // });
    }
    // console.log(atletas.length);
  } else {
    console.log('Error en la autenticacion: ' + res.statusCode + " - " + res.statusMessage);
  }
}).catch(function(err){
  console.log(err.statusCode);
});








// request.get('http://some.server.com/').auth('username', 'password', false);
// // or
// request.get('http://some.server.com/', {
//   'auth': {
//     'user': 'username',
//     'pass': 'password',
//     'sendImmediately': false
//   }
// });
// // or
// request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// // or
// request.get('http://some.server.com/', {
//   'auth': {
//     'bearer': 'bearerToken'
//   }
// });
