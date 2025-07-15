const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const VERIFICATION_TOKEN = process.env.VERIFICATION_TOKEN;
const MAKE_WEBHOOK = process.env.MAKE_WEBHOOK;

app.post('/zoom-webhook', async (req, res) => {
  const payload = req.body;

  if (payload && payload.plainToken) {
    // Verification challenge
    return res.json({
      plainToken: payload.plainToken,
      encryptedToken: payload.encryptedToken
    });
  }

  // Verify request token
  if (payload && payload.token !== VERIFICATION_TOKEN) {
    return res.status(401).send('Unauthorized: Invalid token');
  }

  // Forward to Make.com
  try {
    await axios.post(MAKE_WEBHOOK, payload);
    res.status(200).send('Forwarded to Make.com');
  } catch (error) {
    console.error('Error forwarding to Make.com:', error);
    res.status(500).send('Error forwarding to Make.com');
  }
});

app.get('/', (req, res) => {
  res.send('Zoom to Make Webhook is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
