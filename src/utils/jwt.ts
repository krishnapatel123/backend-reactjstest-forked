import * as jwt from 'jsonwebtoken';
const jwtKey = "ecommerce"//process.env.JWT_SECRET_KEY;

export const verifyToken = (req, res, next) => {
  console.log("token inside verify func : ");

  let token = req.headers['authorization'];
  console.log("token :::::::::::::: verify::::::::: ", token);
  if (token) {
    token = token.split('')[1];
    jwt.verify(token, jwtKey, (err, valid) => {
      console.log({ err });

      if (err) res.status(401).send('Provide valid token');
      else next();
    })
  } else {
    res.status(403).send('Add token with header');
  }
}
