import http,{Server,IncomingMessage,ServerResponse
}from 'http';

import {StringUtil} from'./util/StringUtil'
import { MathUtil } from './util/MathUtil';
import { ApiRouter } from './router/apiRouter';

const hostname:string = "127.0.0.1";
const port:number = 5007;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    ApiRouter.mapRoutes(request,response);

});
server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})