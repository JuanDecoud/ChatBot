import express, { urlencoded } from  'express'
import cors from 'cors'
import http from 'http'
import EnvValues from './config/env/env.variables.js';
import mongodbConfig from './db/mongodb.config.js';
import userRouter from './routes/user.router.js';
import productRouter from './routes/product.router.js';
import orderRouter from './routes/order.router.js';
import chatRouter from './routes/chatbot.router.js';
import passport from 'passport';
import MongoStore from 'connect-mongo'
import session from 'express-session'
import initializePassport from './config/passport.config.js';

const app = express();


app.use(session({
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${EnvValues.dbUser}:${EnvValues.dbPassword}@cluster0.hl4xh.mongodb.net/${EnvValues.dbName}`,
        ttl: 1 * 24 * 60 * 60,
        dbName: EnvValues.dbName,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),
    secret:EnvValues.storeSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, 
        maxAge: 24 * 60 * 60 * 1000 
    }
}))

app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
  }));
app.use(passport.initialize())
app.use(passport.session());

initializePassport()
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







