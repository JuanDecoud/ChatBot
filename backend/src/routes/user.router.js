import Router from 'express'
import UserController from '../controllers/user.controller.js'

const userController = new UserController()
const userRouter = Router()

userRouter.post('/addUser', userController.addUser)
userRouter.post('/auth' , userController.login)

export default userRouter