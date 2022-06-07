// Imports
const express = require('express')
const app = express()
const port = 5000



// Static Files
app.use(express.static('Public'));

// Example for other olders
 app.use('/css', express.static(__dirname + 'views/css'))
 app.use('/js', express.static(__dirname + 'Public/js'))
 app.use('/img', express.static(__dirname + 'Public/img'))


 app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
 })



// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))