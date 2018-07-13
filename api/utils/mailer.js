var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    process.env.EMAIL_USERNAME || 'yugiskskaiba@gmail.com', 
   password:process.env.EMAIL_PASSWORD || 'yugioh41', 
   host:    process.env.EMAIL_HOST || 'smtp.gmail.com', 
   port:     process.env.EMAIL_PORT || 465,
   secure: process.env.EMAIL_SECURE || true,
   ssl: true
});

//console.log(server)

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works", 
   from:    "yugiskskaiba@gmail.com", 
   to:      "shubhambtps@live.in",
   cc:      "piyushsarawagi@yahoo.com",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });