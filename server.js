const  express       = require('express'),
       nodemailer    = require('nodemailer'),
       bodyParser    = require('body-parser'),
       SMTPTransport = require('nodemailer/lib/smtp-transport'),
       {google}      = require("googleapis");

require("dotenv").config();

const OAuth2 = google.auth.OAuth2;
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    
});
 
const oauth2Client = new OAuth2(
  process.env.NODEMAILER_CLIENTID, // ClientID
  process.env.NODEMAILER_SECRET, // Client Secret
);
oauth2Client.setCredentials({
  refresh_token:  process.env.NODEMAILER_REFRESHTOKEN
});
const accessToken = oauth2Client.getAccessToken()

app.use(express.json());app.post('/', (req,res)=>{
    const smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
    auth: {
        type: 'OAuth2',   
        user:          process.env.NODEMAILER_EMAIL,
        clientId:      process.env.NODEMAILER_CLIENTID,
        clientSecret:  process.env.NODEMAILER_SECRET,
        refreshToken:  process.env.NODEMAILER_REFRESHTOKEN,
        accessToken:   accessToken
    }
});

    const mailOpts = {
      from: `${req.body.email}`,
      to: process.env.NODEMAILER_EMAIL,
      subject: `Message From ${req.body.fullname}`  ,
      replyTo:`${req.body.email}`,
      html:`
        <ul>
          <li>From: ${req.body.fullname} ${req.body.email}</li>
          <li>To: ${process.env.NODEMAILER_EMAIL}</li>
        <u/>
        <h3>Message</h3>
        <p>${req.body.message}</p>
      `
}

smtpTrans.sendMail(mailOpts,(error, response)=>{
  if (error) {
      // console.log("Server Error" + error);
      res.json({msg: 'fail'})
  }else {
    // console.log("Server is ready to take our messages" + error);
    res.json({msg: 'success'})
  }
})

})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Portfollio App Server Has Started On Port ${port}`));
 
 