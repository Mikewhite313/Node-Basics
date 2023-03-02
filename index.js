// { path module 
// const path = require("node:path"); initial method
// const path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("modules/data.json"));

// console.log(path.join("folder1","folder2","index.html"));

// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("folder1","folder2",'index.html'));

// console.log(path.resolve(__dirname, "data.json"));
// }
// { Event Module
//     const EventEmitter = require("node:events");
//     const emitter = new EventEmitter()

//     emitter.on("order-pizza", () => {
//         console.log(`Order Recieved`)
//     })
//     emitter.emit("order-pizza");
// }

// const PizzaShop = require("./built-in-module/pizza-shop");
// const DrinkMachine = require("./built-in-module/drink-machine");

// const pizzashop = new PizzaShop();
// const drinkmachine = new DrinkMachine();
// pizzashop.on("order-pizza", (size, topping) => {
//     console.log(`Order Recieved! ${size} pizza with ${topping}`);
//     drinkmachine.serveDrink(size);
// });
// pizzashop.order("large", "pepperoni");
// pizzashop.displayOrderNumber();

// const buffer = new Buffer.from("Syed Anas Ahmed");

// buffer.write("code");

// console.log(buffer.toJSON());
// console.log(buffer);
// console.log(buffer.toString());

// const { writeFileSync } = require("node:fs");
// const fs = require("node:fs");

// console.log("First");

// const fileContents = fs.readFileSync("./file.txt","utf-8");
// console.log(fileContents);
// console.log("Second");

// fs.readFile("./file.txt",(error, data) => {
//     if(error) {
//         console.log(error);
//     }
//     else{
//         console.log(data);
//     }

// });

// console.log("Third");

// fs.writeFileSync("./greet.txt","Hello Javascript");
// fs.writeFile("./greet.txt"," Hello Anas",{flag: "a"},(error) => {
//     if(error) {
//         console.log(error);
//     }
//     else{
//         console.log("File Written");
//     }
// });

// const fs = require("node:fs/promises");
// fs.readFile("./file.txt","utf-8")
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });
// console.log("Second");

// async function readFile()
// {
//     try
//     {
//         const data = await fs.readFile("./file.txt","utf-8");
//         console.log(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// readFile();

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./file.txt",{
//     encoding: "utf-8",
//     highWaterMark: 2,
// });
// readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writeStream = fs.createWriteStream("./file2.txt");

// readStream.pipe(writeStream);
// readStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeStream.write(chunk);
// });

// const fs = require("node:fs");

// console.log("First");

// fs.readFile("./file.txt", "utf-8" , (error, data) => {
//     console.log("File Contents");
//     });
// console.log("last");

// const crypto = require("node:crypto");
// process.env.UV_THREADPOOL_SIZE = 16;

// const MAX_CALLS = 16;

// const start = Date.now();
// // crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// // crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// // console.log("Hash: ", Date.now() - start);
// for(let i =0; i< MAX_CALLS; i++) {
//     crypto.pbkdf2("password","salt",100000,512,"sha512", () => {
//         console.log(`Hash: ${i + 1} ${Date.now() - start}`);
//     });
// }

// console.log("console.log 1");
// process.nextTick( () => console.log("this is the process"));
// console.log("console.log 2");

// setTimeout( () => console.log("this is the setTimeout 1"), 1000);
// setTimeout( () => console.log("this is the setTimeout 2"), 500);
// setTimeout( () => console.log("this is the setTimeout 3"), 0);

// process.nextTick( () => console.log("this is the process.nextTick 1"));
// process.nextTick( () => {
//     console.log("this is the process.nextTick 2");
//     process.nextTick( () => console.log("This is the inner next Tick") );
// });
// process.nextTick( () => console.log("this is the process.nextTick 3"));

// Promise.resolve().then( () => console.log("this is the promise.resolve 1"));
// Promise.resolve().then( () => {
//     console.log("this is the promise.resolve 2");
//     process.nextTick( () => console.log("This is the inner next Tick") );
// })
// Promise.resolve().then( () => console.log("this is the promise.resolve 3"));

const fs = require("fs");

// fs.readFile(__filename, () => {
//     console.log("this is readFile");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then( () => console.log("this is promise.resolve 1"));

// setTimeout( () => console.log("this is setTimeout"),0);

// fs.readFile(__filename, () =>{
//     console.log("this is readFile 1");
// });

// fs.readFile(__filename, () => {
//     console.log("this is readFile 1");
// });

// process.nextTick( () => console.log("this is process.nextTick"));
// Promise.resolve().then( () => console.log("this is Promise.resolve 1"));
// setTimeout( () => console.log("this is setTimeout 1"),0);
// setImmediate( () => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}

const http = require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server is running on port 3000"));