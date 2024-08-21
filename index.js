const http = require("http");

const server = http.createServer((req, res) => {
    res.write("under construction");
    res.end();
});

server.listen((80), ()=> {
    console.log("running")
});
