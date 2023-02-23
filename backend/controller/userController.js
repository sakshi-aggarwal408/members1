
const SignupSchema = require('../collection/Schema')
const bcrypt11 = require('bcrypt');
const jwt = require('jsonwebtoken');
const SecretKey = 'eahd124dshfg2333'
// const val=require('../middleware/Validation')




//signup api
// const validation= await val.validateAsync(req.body);
// if(validation)

     const Signup= async (req, res) => {


    let { name, email, phone, password, confirm_password } = req.body

    try {
        let existingUser = await SignupSchema.findOne({ email: email })
        if (existingUser) {
          return  res.status(400).json({
                message: "user already registered"
            })
        }
        if(password != confirm_password){
            res.status(201).json({
                message: "enter the same password"
            })
        }

        var hashed_password = await bcrypt11.hash(password, 10)


        const store = await new SignupSchema({
            name: name,
            email: email,
            phone: phone,
            password: hashed_password,
        })


        const result = await store.save()

        res.status(201).json({
            message: "successfully registered",
            data: result
        })
    


    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

//login api

    const Login= async (req, res) => {

    const { email, password } = req.body;


    try {
        const existingUser = await SignupSchema.findOne({ email: email });
        if (!existingUser) {
            res.status(400).json({
                message: 'user not registered, signup now'
            })
        
        };

        const compare = await bcrypt11.compare(password, existingUser.password);
        if (!compare) {
            res.status(400).json({
                message: "password mismatching"
            })
        }
        const token = await jwt.sign({ email: existingUser.email, id: existingUser._id }, SecretKey)//token create
        res.status(201).json({
            data: existingUser,
            message: "user successfully logged in",
            token: token
        })
    } catch (err) {
        console.log(err)
    }


}
module.exports=Signup
module.exports=Login