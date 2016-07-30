/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//console.log('Hello world');

/*var http=require("http");
http.createServer(function(request,response){
   
    response.writeHead(200,{'content-type':'text/plain'});
    response.end("Hello world\n");
}).listen(80001);

console.log("Server is running......");*/

//File Write without and stop
/*var fs = require("fs");
var data =fs.readFileSync("dev.txt");
console.log(data.toString());
console.log("Program end");*/

//File Write with small pause
var fs =require("fs");
fs.readFile('dev.txt',function(err,data){
    if(err)
     console.log(err.stack);
    else
    console.log(data.toString());
    
})
console.log("File End....");