export const createJwt = (_id: string) => {
  const jwt = require('jsonwebtoken');
  const jwtSecret = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 30 * 60,
      data: { id: _id },
    },
    jwtSecret
  );
  return token;
};

export const validateJwt = async () => {
  const res = await fetch('/api/validateJwt');
  const json = await res.json();
  if (json.message) return false;
  return json.id;
};
