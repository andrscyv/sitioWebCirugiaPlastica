var mailgun = require("mailgun-js");
var api_key = '';
var DOMAIN = 'mg.eljefeinc.net';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'andrscyv@gmail.com, YOU@YOUR_DOMAIN_NAME',
  subject: 'Hello',
  text: 'Que onda mano!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});