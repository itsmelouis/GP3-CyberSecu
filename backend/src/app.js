import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth/authRouter.js';
import userRouter from './routes/user/userRouter.js';

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`L'API tourne sur http://localhost:${port}`)
})
