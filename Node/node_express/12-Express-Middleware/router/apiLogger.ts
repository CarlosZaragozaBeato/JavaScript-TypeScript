import express from 'express';

export let apiLogger = (request:express.Request, response:express.Request, next:express.NextFunction) => {

    let url:string|undefined = request.url;
    let method:string|undefined = request.method;
    let date:string = new Date().toLocaleDateString();
    let time:string = new Date().toLocaleTimeString();
    let result = `[{${url}}] [{${method}}] - [{${date}}] - [{${time}}]`;
    console.log(result);
    next();
}

