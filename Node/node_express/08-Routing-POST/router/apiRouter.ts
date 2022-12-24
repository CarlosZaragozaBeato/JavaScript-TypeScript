import http,{IncomingMessage,ServerResponse} from 'http';
export class ApiRouter{

    public static mapRoutes(request:IncomingMessage, response:ServerResponse){
        let url:string|undefined = request.url;
        let method:string|undefined = request.method;
        let result:string = '';
    
        if (url === '/' && method === 'GET' ){
            result = `<h2>RESULT ACCEPTED</h2>`
        }else if(url==='/about' && method ==='GET'){
            result = `<h2>ABOUT PAGE</h2>`
        }else if(url==='/contact' && method ==='GET'){
            result = `<h2>CONTACT PAGE</h2>`
        }else{
            result = `<h3>PAGE NOT FOUND</h3>`
        }
        response.end(result)
    }
}