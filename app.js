const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
    response.setHeader("type", "html");
    response.end(fs.readFileSync("index.html"));
}).listen(10000, "0.0.0.0", function(){
    console.log("Сервер начал свою работу");
});
