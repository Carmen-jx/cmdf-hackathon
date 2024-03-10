const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const userService = require("./user-service.js");
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');


const HTTP_PORT = process.env.PORT || 8080;

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {
    //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: process.env.JWT_SECRET
};



let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);

  if (jwt_payload) {
    next(null, {
      _id: jwt_payload._id,
      userName: jwt_payload.userName,
    });
  } else {
    next(null, false);
  }
}); 

 app.use(cors())
// tell passport to use our "strategy"
passport.use(strategy);
 
// add passport as application-level middleware
app.use(passport.initialize());
 
app.use(express.json());


app.get('/', (req, res) => {

    res.send('API Listening!')
  })

app.post("/api/user/register", (req, res) => {

    userService.registerUser(req.body)
    .then((msg) => {
        res.json({ "message": msg });
    }).catch((msg) => {
        res.status(422).json({ "message": msg });
    });
});


app.post("/api/user/login", (req, res) => {
    userService.checkUser(req.body)
    .then((user) => {
        const payload = {
            _id: user._id,
            userName: user.userName
        };
        const token = jwt.sign(payload, jwtOptions.secretOrKey, {
            expiresIn: '1h'
        });
        res.json({ 
            message: "login successful",
            token: token
        });
    }).catch((msg) => {
        res.status(422).json({ message: msg });
    });
});



userService.connect()
.then(() => {
    app.listen(HTTP_PORT, () => { console.log("API listening on: " + HTTP_PORT) });
})
.catch((err) => {
    console.log("unable to start the server: " + err);
    process.exit();
});