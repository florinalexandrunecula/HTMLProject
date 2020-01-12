var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);

    var a = params.total;
	var d = new Date();
	var written=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
	to_send=a+". Your order was processed on "+written;
    response.write(to_send);
    response.end();
}).listen(10001);