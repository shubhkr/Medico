const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
client.messages
	.create({
	   body: 'You have successfully booked an appointment. You will be receiving' +
	   	'a call from one of our customer care executive soon. Thank you',
	   from: '+17324908627',
	   to: '+917896234737'
	 })
	.then(message => console.log(message.sid))
	.done();
