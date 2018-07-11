const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Contact = require('./model/Contact');

mongoose.connection.on('connected', function(){
  console.log('Success: connected to MongoDB');
})

mongoose.connection.on('error', function(err){
  console.log('Error:'+err);
  process.exit(1);
})

mongoose.connect(process.env.MONGODB_URI);

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.post('/contact/create', function (req, res) {
  console.log(req.body)
  new Contact({
    name: req.body.name,
    phone: req.body.phone,
    birthday: req.body.birthday
  })
    .save()
    .then((doc) => res.json({id: doc.id}))
    .catch((err) => res.status(500).end(err.message))
});

app.get('/contact', function (req, res) {
  Contact.find({}, (err, contacts) => {
    console.log(contacts);
    if(err) res.status(500).end(err.message)
    else res.send(contacts)
  })
});

// app.get('/contact/:id', function (req, res) {
//   Contact.findById(req.params.id, (err, doc) => {
//     if(err) res.status(500).end(err.message)
//     else res.json(doc)
//   })
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 1337);
