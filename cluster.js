const cluster = require('cluster');
const os = require('os');

const pid = process.pid;

if(cluster.isMaster){
    const cpusCount = os.cpus().length;
    console.log(`CPUs: ${cpusCount}`);
    console.log(`Master cluster started. Pid ${pid}`);
    for(let i = 0; i < cpusCount - 1; i++){
        const worker = cluster.fork();
        worker.on('exit', () => {
            console.log(`Worker died. Pid ${worker.process.pid}`);
            cluster.fork();
        })
    }
}

if(cluster.isWorker){
    require('./worker');
}