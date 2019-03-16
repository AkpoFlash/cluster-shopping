const http = require('http');

const pid = process.pid;

http.createServer((req, res) => {
    res.end(`Cluster server\n`)
}).listen(8080,()=>{
    console.log(`Server is running. Pid: ${pid}`);
});
