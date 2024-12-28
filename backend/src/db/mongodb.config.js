import EnvValues from '../config/env/env.variables.js'
import mongoose from 'mongoose'

const urlConnect = `mongodb+srv://${EnvValues.dbUser}:${EnvValues.dbPassword}@cluster0.hl4xh.mongodb.net/${EnvValues.dbName}`

const connectToDb = async ()=>{
    try {
        const connect = await mongoose.connect(urlConnect);
        if (connect) console.log("Conexion a la db realizada con exito");
        
    } catch (error) {console.log("Error al conectarse a la base de datos" , error);};
}

export  default {connectToDb}

