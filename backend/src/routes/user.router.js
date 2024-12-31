import Router from 'express'
import UserController from '../controllers/user.controller.js'
import passport from 'passport'

const userController = new UserController()
const userRouter = Router()

userRouter.post('/auth', passport.authenticate('login'),(req,res)=>{ console.log(req.user)
     res.status(200).json({ success: "ok", data: req.user });})
userRouter.post ('/addUser',passport.authenticate('register'),(req,res)=>{res.status(200).json({status: `succcess`, message:"Usuario creado con exito."})})
userRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) res.status(400).json({status :"error" ,message : 'error'})
        return  res.status(200).json({status:"ok" , message:"Sesión cerrada con exito"})
    })
})


export default userRouter