import bcrypt from 'bcrypt'
export const validatePassword = (password , user) =>{return bcrypt.compareSync(password,user.password)}
export const encrypt = (password)=>{return bcrypt.hashSync(password, bcrypt.genSaltSync(10))}