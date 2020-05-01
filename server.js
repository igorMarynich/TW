const express = require('express');
const app = express();
const path = require('path');
const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
require('dotenv').config();

const MAX_ALLOWED_SESSION_DURATION = 14400;
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKeySID = process.env.TWILIO_API_KEY_SID;
const twilioApiKeySecret = process.env.TWILIO_API_KEY_SECRET;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/token', (req, res) => {
  const { identity, roomName } = req.query;
  const token = new AccessToken(twilioAccountSid, twilioApiKeySID, twilioApiKeySecret, {
    ttl: MAX_ALLOWED_SESSION_DURATION,
  });
  token.identity = identity;
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  res.send(token.toJwt());
  console.log(`issued token for ${identity} in room ${roomName}`);
});

app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

app.listen(8081, () => console.log('token server running on 8081'));

// ./server.js

// require('dotenv').load()

// const Chance = require('chance')
// const ChatGrant = AccessToken.ChatGrant
// const chance = new Chance()

// app.get('/token', function (req, res) {
//   const token = new AccessToken(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_API_KEY,
//     process.env.TWILIO_API_SECRET,
//   )

//   token.identity = chance.name()
//   token.addGrant(new ChatGrant({
//     serviceSid: process.env.TWILIO_CHAT_SERVICE_SID
//   }))

//   res.send({
//     identity: token.identity,
//     jwt: token.toJwt()
//   })
// })

// app.listen(3001, function () {
//   console.log('Programmable Chat token server listening on port 3001!')
// })
