import express from 'express';
import userRouter from './router/userRouter';

const app:express.Application = express();

const hostname:string = "127.0.0.1";
const port:number = 5010;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/',(request:express.Request, response:express.Response)=>{
    response.status(200).send(`<h3>Welcome to Express JS</h3>`);
});


app.use('/users',userRouter);


app.listen(port, hostname,()=>{
    console.log("Express Server is started")
});

