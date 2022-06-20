// Imports
const express = require('express')
const app = express()
const port = 5000
const router = express.Router();
bodyParser = require('body-parser');

// add router in express app
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

// Static Files
app.use(express.static('Public'));

// Example for other olders
 app.use('/css', express.static(__dirname + 'views/css'))
 app.use('/js', express.static(__dirname + 'Public/js'))
 app.use('/img', express.static(__dirname + 'Public/img'))


 app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
 })

 app.get('/login.html', (req, res) => {
   res.sendFile(__dirname + '/views/login.html')
})

app.post('/submit', function (req, res) {
   console.log(req.body)
   res.redirect('/')
 })

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))