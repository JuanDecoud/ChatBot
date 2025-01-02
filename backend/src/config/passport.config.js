import passport from "passport"
import local from 'passport-local'
import { encrypt , validatePassword} from "../utils/utils.js"
import UserDTO from "../dto/user.dto.js"
import services from "../services/services.js"

const LocalStrategy = local.Strategy

const initializePassport = () => {

    passport.use('register', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'email'
    }, async(req, email, password, done) => {

        const {name,lastname ,address, phone, dni } = req.body
   
        let data = {name : name ,lastname : lastname , email:email , address:address, phone : phone , dni:dni}
        try {
            const newUser = {email : email, password: encrypt(password) ,name : data.name , lastname:data.lastname , address:data.address, phone : data.phone}
            const result = await services.userServices.addUser(newUser)
            return done(null, newUser)
        } catch(err) {
            console.log(err)
           return done('Error en la creacion del user')
           
        }
   
    }))

    passport.use('login', new LocalStrategy({
        usernameField: 'email'
    }, async(email, password, done) => {
        try {
        
            let user = await services.userServices.findbyuserName(email.toLocaleLowerCase())
            if (!user ) {return done(null, false)}
            if (!validatePassword(password, user)) return done(null, false)
            
            return done(null, user)
        } catch(err) {
            console.log(err)
        }
    }))


    passport.serializeUser((user, done) => {
        let userDto = new UserDTO (user)

        done(null, userDto)
    })

    passport.deserializeUser(async (id, done) => {
        let newId = JSON.stringify(id)
        let newObjet = JSON.parse(newId)
        const user = await services.userServices.getById(newObjet.id)
        let userDto = new UserDTO (user)
        done(null, userDto)
    })

}

export default initializePassport