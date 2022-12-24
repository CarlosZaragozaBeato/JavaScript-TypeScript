import http,{Server,IncomingMessage,ServerResponse
}from 'http';


const hostname:string = "127.0.0.1";
const port:number = 0;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(`<h3>Welcome to Node Js Server</h3>`)
});

server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})