import jwt from 'jsonwebtoken';

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      
    },
    '1234',
    {
      expiresIn: '48h',
    }
  );
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, '1234', (err, decode) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid Token' });
      }
      req.user = decode;
     
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: 'Token is not supplied.' });
  }
};


  export { getToken ,isAuth};