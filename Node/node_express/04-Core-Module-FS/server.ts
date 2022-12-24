import http,{Server,IncomingMessage,ServerResponse
}from 'http';

import fs from 'fs';
import path from 'path';

const hostname:string = "127.0.0.1";
const port:number = 5006;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');



fs.readFile(path.join(__dirname,'data','node.txt'), 'utf-8',(error, result)=>{
        if(error){throw error;}
        response.end(`<pre>${result}</pre>`)

        fs.writeFile(path.join(__dirname,'data','new_file.txt'),result,'utf-8',(error)=>{
            if(error)throw error
            response.end(`<pre>Data Written to a file...</pre>`)
        });
    })




});
server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})