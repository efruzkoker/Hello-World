var http = require("http");

http.createServer(function(request , response){
// send the http heade
//http status:200 : ok
// content type: text/plain

if(request.url=="/eng"){
	response.write("Hello World!");
	response.end();
}
else if(request.url=='/tr'){
	response.write("Merhaba Dunya!");
	response.end();
}
else if(request.url=="/"){
	response.write("/tr ya da /eng seceneklerini deneyiniz");
	response.end();
}
}).listen(8081);

//console will print the message
console.log("Server running at http://127.0.0.1:8081");
