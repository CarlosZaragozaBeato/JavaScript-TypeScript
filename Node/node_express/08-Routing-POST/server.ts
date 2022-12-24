import http,{Server,IncomingMessage,ServerResponse
}from 'http';

import {StringUtil} from'./util/StringUtil'
import { MathUtil } from './util/MathUtil';
import { ApiRouter } from './router/apiRouter';

const hostname:string = "127.0.0.1";
const port:number = 5008;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    if(request.url ==='/user' && request.method === 'POST'){
        let body:any = '';
        request.on('data', (chunk)=>{
            body+=chunk;
        }).on('end',()=>{
            let formData = JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`)
        });
    }

});
server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})