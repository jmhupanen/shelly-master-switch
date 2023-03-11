import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


router.get('/switchState', async (req, res) => {
  let json;

  try {
    const response = await fetch(process.env.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ API: process.env.APPS_SCRIPT_API_KEY })
    });
    json = await response.json();
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }

  if (json && 'switchState' in json) {
    res.status(200).send(json);
  } else {
    res.status(400).send('Key invalid');
  }
});

export default router;