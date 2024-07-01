import express from 'express';
import authRouter from './routes/auth/authRouter.js';

const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
