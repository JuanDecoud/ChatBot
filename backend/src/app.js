import express, { urlencoded } from  'express'
import cors from 'cors'
import http from 'http'
import EnvValues from './config/env/env.variables.js';
import mongodbConfig from './db/mongodb.config.js';
import userRouter from './routes/user.router.js';
import productRouter from './routes/product.router.js';
import orderRouter from './routes/order.router.js';
import chatRouter from './routes/chatbot.router.js';

const app = express();
app.use(express.json());
app.use(urlencoded({extended:true}))
app.use(cors());
/// routes
app.use('/user' , userRouter);
app.use('/product' , productRouter);
app.use('/orders' , orderRouter);
app.use('/chatbot' , chatRouter);
////---
const server = http.createServer(app);

try {
    await mongodbConfig.connectToDb();
    server.listen(EnvValues.port, ()=>{console.log(`Servidor escuchando en el puerto: ${EnvValues.port}`)});
} catch (error) {
    console.log("ocurrio un error al iniciar el server");
}







