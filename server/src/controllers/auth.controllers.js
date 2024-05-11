import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email ==='' || password === ''){
        errorHandler( 400 , "All fields are required");
        // res.json({
        //     message:"all fields are required"
        // })
    }

    const hashedPassed = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hashedPassed
    })


try {
        await newUser.save();
        res.json('Signup successful')
} catch (error) {
    next(error);
}
}