import express from 'express';

const userRouter:express.Router = express.Router();



userRouter.get('/',(request:express.Request, response:express.Response)=>{
   response.status(200).send(`<h2>WELCOME TO USER ROUTER</h2>`) 
});
userRouter.get('/test',(request:express.Request, response:express.Response)=>{
    response.status(200).send(`<h2>WELCOME TO USER ROUTER TEST</h2>`) 
 });

 /**
  * @usage : to check the form data
  * @url : http://127.0.0.1:5010/users/login
  * @method : post
  * @fields : name, password
  * @access :public
  */
userRouter.post('/login', (request:express.Request, response:express.Response)=>{
   let formData = request.body;
   response.status(200).json({
      msg:`form data received`,
      form:formData
   })
})




export default userRouter;