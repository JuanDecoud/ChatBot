import dotenv from "dotenv"

dotenv.config()

export default class EnvValues {
    static dbName = process.env.DB_NAME
    static dbPassword = process.env.DB_PASSWORD
    static dbUser = process.env.DB_USER
    static port = process.env.PORT_SERVER
    static chatKey = process.env.GPT_KEY
}