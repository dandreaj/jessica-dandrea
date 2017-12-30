const functions = require('firebase-functions');
const express = require('express');
const Mailgun = require('mailgun-js');

const app = express();

const api_key = functions.config().mailgun.key;
const domain = functions.config().mailgun.domain;
const mailgun = new Mailgun({apiKey: api_key, domain: domain});

app.post('/send', (req, res) => {
    let data = {
        from: req.body.email,
        to: '<jdandrea11@gmail.com>',
        subject: 'Hello from jessicadandrea.com',
        text: req.body.message
    }

    mailgun.messages().send(data, function(error, body) {
        if(error) {
            console.log(error);
        }
        res.send(body);
    })
});
exports.app = functions.https.onRequest(app);
