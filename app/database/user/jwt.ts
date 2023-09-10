import { getJwtCookie } from '@/helpers/cookiesHelper';

const jwt = require('jsonwebtoken');

export const createJwt = (_id: string) => {
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
  const jwt = getJwtCookie();

  const res = await fetch('/api/validateJwt', {
    method: 'POST',
    body: JSON.stringify({ jwt }),
  });
  const json = await res.json();
  if (json.message) return false;
  return json.id;
};
