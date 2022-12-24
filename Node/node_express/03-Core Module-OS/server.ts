import http,{Server,IncomingMessage,ServerResponse
}from 'http';
import os from 'os';

const hostname:string = "127.0.0.1";
const port:number = 0;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

//OS Module

let osData = {
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
    homedir: os.homedir(),
    computeName:os.hostname()
};


response.end(`<pre>${JSON.stringify(osData)}</pre>`)
 



});

server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})