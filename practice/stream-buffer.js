const http= require("http")
const fs = require("fs")
//creating a server using raw node.js
const server = http.createServer()

    //listener
    server.on("request", (req, res)=>{
        // console.log("request-->",req.url, req.method);
        // res.end("hello from world")

        if(req.url === "/read-file" && req.method === 'GET'){
            //streaming file reading
            const readableStream = fs.createReadStream(__dirname + "/texts/readbul.txt")

            readableStream.on("data", (buffer)=>{
                res.statusCode = 200
                res.write(buffer)
            })
            readableStream.on("end",()=>{
                res.statusCode = 200
                res.end("The streaming is over !")
            })
            readableStream.on("error",()=>{
                res.statusCode = 500
                res.end("Something went wrong !")
            })
        }
    })

    server.listen(5000, ()=>{
        console.log("server is running on port 5000");
    })
