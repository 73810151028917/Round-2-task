const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
	if(req.url == "/"){
		res.end("Hello sir, Good Morning, if yount to see the result you have to be write 127.0.0.1:8000/api");
	}
	else if(req.url == "/api"){
		fs.readFile(`${__dirname}/data.json`,"UTF-8",(err, data) => {
			console.log(data);
			res.end(data);
		});
		
	}
	else{
		res.end("404 Pgae Not Found");
	}
	
});

server.listen(8000,"127.0.0.1", () => {
	console.log("listening to the port no 8000");
});