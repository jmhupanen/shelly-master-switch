import express from 'express';
import indexRouter from './routes/index.mjs';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', indexRouter);

// Server setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
