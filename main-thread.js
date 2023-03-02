const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req,res) => {
    if (req.url === "/")
    {
        res.writeHead(200, { "Content-Type": "Text/plain"});
        res.end("Home Page");

    }
    else if (req.url === "/slow-page")
    {
        const worker = new worker("./worker-thread.js");
        worker.on("message", (j) => {
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(`Slow Page ${j}`);
        })
        let j = 0;
        for(let i = 0; i < 6000000000; i++) {
            j++;
        }
        res.writeHead(200, {"Content-Type": "Text/plain"});
        res.end(`Slow Page ${j}`);
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));