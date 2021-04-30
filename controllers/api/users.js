const User = require('../../models/user');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports= {
    create,
    login,
    checkToken
}

async function create(req,res,next) {
    try {
        //Add the user to the database
        const user = await User.create(req.body);
        //token will be a string
        const token = createJWT(user);
        //Yes, we can use res.json to send back just a string
        // The client code takes this into consideration
        res.json(token);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        // Data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    );
}

async function login(req, res, next) {
    try{
        const user = await User.findOne({email: req.body.email})
        console.log('login functoin token =>', user)
        const match = await bcrypt.compare(req.body.password, user.password);
        if (match) {
            console.log('yay mtach')
            const token = createJWT(user);
            res.json(token);
        } else {
            throw new Error();
        }
    } catch(err) {
        res.status(400).json('Bad credentials');   
    }

}


function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }