const fs = require("fs");
//reading file text with async
fs.readFile("H:/learning-node/texts/read.txt", "utf-8", (err, data) => {
    if (err) {
        throw Error("Error reading text")
    }
    //writing file text with async
    fs.writeFile("H:/learning-node/texts/write.txt", "Hello World", (err) => {
        if (err) {
            throw Error("Error writing text")
        }
    })
})
console.log("testing asyync");


