import express from 'express';

const userRouter:express.Router = express.Router();



userRouter.get('/',(request:express.Request, response:express.Response)=>{
   response.status(200).send(`<h2>WELCOME TO API ROUTER</h2>`) 
});

userRouter.get('/test',(request:express.Request, response:express.Response)=>{
    response.status(200).send(`<h2>WELCOME TO API ROUTER TEST</h2>`) 
 });









export default userRouter;