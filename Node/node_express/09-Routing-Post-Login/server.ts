import http,{Server,IncomingMessage,ServerResponse
}from 'http';


const hostname:string = "127.0.0.1";
const port:number = 5008;

const server:Server = http.createServer((request:IncomingMessage,response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    if(request.url ==='/login' && request.method === 'POST'){
        let body:any = '';
        request.on('data', (chunk)=>{
            body+=chunk;
        }).on('end',()=>{
            let formData = JSON.parse(body);

        if (formData.name === "Carlos" && formData.password ==="1234"){
            response.end(`<pre>SUCCESS</pre>`)
        }else{
            response.end(`<pre>ERROR</pre>`)
        }

            
        });
    }

});
server.listen(port, hostname, ()=>{
    console.log('Node js Sever started')
})