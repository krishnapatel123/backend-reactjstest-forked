import * as jwt from 'jsonwebtoken';
const jwtKey = "ecommerce"//process.env.JWT_SECRET_KEY;

export const verifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(' ')[1];
    if (token) {
      jwt.verify(token, jwtKey, (err, data) => {
        if (err) res.status(401).send('Provide valid token');
        else {
          req.body.userId = data.userInfo.id;
          next();
        }
      })
    } else {
      res.status(403).send('Add token with header');
    }
  } else {
    res.status(403).send('Provide header');
  }

}
