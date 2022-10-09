const express = require('express')
const app = express()

const path = require('path')
app.use('/public',express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
    var conectFile = path.join(__dirname, 'home.html')
    res.sendFile(conectFile)
})
app.get('/home', (req, res) => {
    res.json("home")
})
app.listen(process.env.PORT, () => {

})