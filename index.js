
//What is node js?

//node js is a runtime enviroment that is used to run js file in any code editor and to 
//build backend developement.
// Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build 
// scalable and high-performance network applications. It is built on the Chrome V8 JavaScript engine and 
// provides an event-driven, non-blocking I/O model, which makes it well-suited for building real-time web 
// applications, APIs, and various types of networked software


//what is npm?

// NPM stands for "Node Package Manager." It is a package manager for JavaScript and the default package 
// manager for Node.js. 

//Package Management: NPM is used to install, manage, and update JavaScript packages and dependencies
// for Node.js applications. These packages can include libraries, frameworks, tools, and various code modules.

// THE BELOW LINW CAN RUN IN BROWSER BUT NOT IN VS CODE CAUSE THIS IS MODULE THAT CAN ONLY 
//RUN AND UNDERSTAND BY BROWSERS
//console.log(window);

//what is node module?

// "Node module" refers to a reusable piece of JavaScript code that encapsulates specific functionality. 
// Node.js uses a module system to organize and structure code, making it more modular and maintainable. 
// Modules are fundamental to building scalable and maintainable Node.js applications.

//There are three types of modules
// 1) Functional Module: 

// const v={
//     multiply:(a,b)=>{
//         console.log(a*b);
//     },
//     divide:(a,b)=>{
//         console.log(a/b);
//     }
// };

// module.exports=v;

//2)built-in Module
// fs is file system that are used to manage the files basically 

//we can import the properties of particular module by 

//const {readFile} = rquire("fs");

//here the readFileSync() is something that execute the code synchronisely rather it takes more  and more time
// it will be happening first then after all things happen. check readFileSync();

// const fs=require("fs");



// const a="Hello";

// fs.writeFile("./createdBywriteFile.txt",a,(err)=>{
//     if (err) {
//         console.log(err);
//     }

// });

// const os=require("os")

// const userInfo=os.userInfo();

// // console.log(userInfo);
// console.log(os.freemem());


//++VERY IMPORTANT MODULE++

//How to create server ?

//for that we use http module

const http=require("http");
const fs=require("fs");

const PORT=4000;
const hostname="localhost";

const hm=fs.readFileSync("./index.html","utf-8");
const server=http.createServer((req,res)=>{
    if(req.url==="/about") res.end("<h1>About Page</h1>");
    else if(req.url=="/") res.end(hm); //hm is the .html file that we request by fs(file system module)
    else 
    res.end("<h1>404 NOT FOUND :(</h1>")
})

server.listen(PORT,hostname,()=>{
    console.log("Server is running on http://localhost4000");
})
//listen property is for server that we have created ..we should listen to them





