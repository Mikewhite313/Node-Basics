const http = require("node:http");
const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//     const superr = 
//     {
//             firstName: "Syed",
//             lastName: "Anas",
//     }
   
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Hello World</h1>");
// });

// server.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

// const server = http.createServer((req, res) => {
//     const name = "Syed Anas Ahmed";
//     res.writeHead(200, { "Content-Type": "text/html" });
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(html);
// });
const server = http.createServer((req, res) => {

    if(req.url === "/")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Home Page");
    }
    else if(req.url === "/about")
    {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("About Page");
    }
    else if(req.url === "/api")
    { 
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({name: "Syed Anas Ahmed"}));
    }
    else{
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});