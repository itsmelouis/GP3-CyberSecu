import { userInfo } from '../services/userInfo.js';

export default async (req, res) => {
  try {
    const user = await userInfo(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
