import http,{Server,IncomingMessage,ServerResponse
}from 'http';

import {StringUtil} from'./util/StringUtil'
import { MathUtil } from './util/MathUtil';

const hostname:string = "127.0.0.1";
const port:number = 5007;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    let name:string = "Carlos Zaragoza Beato"
    let value:number = 40
    //response.end(`<pre>${StringUtil.printTriangle(name)}</pre>`)
    response.end(`<pre>${MathUtil.printMathTable(value)}</pre>`)
});
server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})