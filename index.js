import 'dotenv/config.js';
import express from 'express';
// import dosenRoute from './routers/dosenRouter.js';
// import mahasiswaRoute from './routers/mahasiswaRouter.js';
import cors from 'cors';
import productRouter from './routers/productRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/mahasiswa', mahasiswaRoute);
// app.use('/dosen', dosenRoute);
app.use(productRouter);
app.listen(5000, () => {
  console.log('server uppss');
});
