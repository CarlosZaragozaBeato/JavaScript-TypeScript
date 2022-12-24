import express from 'express';
import apiLogger from './apiLogger';

const apiRouter:express.Router = express.Router();



apiRouter.get('/',(request:express.Request, response:express.Response)=>{
   response.status(200).send(`<h2>WELCOME TO API ROUTER</h2>`) 
});

apiRouter.get('/test',(request:express.Request, response:express.Response)=>{
    response.status(200).send(`<h2>WELCOME TO API ROUTER TEST</h2>`) 
 });









export default apiRouter;