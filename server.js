const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// const whitelist = ['http://localhost:3000'​, 'http://localhost:8080'​,​'https://git.heroku.com/wider-app.git']
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))
 
app.get('/contact', (req,res)=>{
    res.send("wlcome")
})
app.post('/api/contact',(req,res)=>{
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:'jovanovicmiki529@gmail.com',
            pass:'M.jovan$1'
        }
    })
    let mailOptions = {
        form:data.email,
        to:'drivers@widerinc.net',
        subject:`Message from ${data.name}`,
        html:`
        <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Last Name: ${data.lastName}</li>
                <li>Email: ${data.eMail}</li>
                <li>City: ${data.city}</li>
                <li>Country: ${data.country}</li>
                <li>ZIP CODE: ${data.zipCode}</li>
                <li>Telephone: ${data.phone}</li>
            </ul>
        `
    }
    const {name, lastName, eMail, city, country, zipCode, phone} =data;
    if(!name || !lastName|| !eMail || !city || !country || !zipCode|| !phone   ){
        res.json({message: "All fields are required message is not sent"})
    }else{
    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        }else{
            res.send({success:'Success'})
        }
    })
       smtpTransport.close();
    }
})
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
const PORT = process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server starting at port ${PORT}`)
})
