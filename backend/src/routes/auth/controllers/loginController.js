import { verifyUser } from '../services/verifyUser.js';

export default async (req, res) => {
  try {
    const token = await verifyUser(req.body);
    res.send({ token });
  } catch (error) {
    if ([401, 404].includes(error.code)) return res.sendStatus(401);
    res.status(500).send(error);
  }
};
