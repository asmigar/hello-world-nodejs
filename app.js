const express = require('express')
const path = require('path')
const app = express()
const hostname = "127.0.0.1"
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("User requested")
})

app.get('/user/:username', (req, res) => {
  res.send(`Hello ${req.params.username}!`)
  console.log("User requested")
})

app.get('/org/:orgname', (req, res) => {
  res.send(`Hello World with love from ${req.params.orgname}!`)
  console.log("User requested")
})

app.get('/user/:username/org/:orgname', (req, res) => {
  res.send(`Hello ${req.params.username} with love from ${req.params.orgname}!`)
})

app.get('/bye', (req, res) => {
  const options = {
        root: path.join(__dirname)
    };
 
  const fileName = 'assets/bye.gif';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
            process.exit(1)
        }
    });


})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
