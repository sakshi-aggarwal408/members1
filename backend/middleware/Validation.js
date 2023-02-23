const joi=require("joi")

const Validator=joi.object({
    name: joi.string()
                  .min(5)
                  .max(30)
                  .required(),
                    
        email: joi.string()
               .email()
               .min(5)
               .max(50)
               .optional(), 


})
module.exports=Validation