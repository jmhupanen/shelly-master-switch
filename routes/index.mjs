import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();


router.get('/switchState', async (req, res) => {
  try {
    const payload = { API: process.env.APPS_SCRIPT_API_KEY }
    const response = await axios.post(process.env.APPS_SCRIPT_URL, payload);
    console.log(response.data);
    if ('switchState' in response.data) {
      res.status(200).send(response.data);
    } else {
      res.status(400).send('Key invalid');
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

export default router;