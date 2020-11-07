const express = require('express')
const path = require('path')
const app = express();
var cors = require('cors')

app.use(cors())

// app.get('/', (req, res) => res.send({ msg: 'Welcome to Whatsoup' }));

app.use(express.static(path.join(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'index.html'))
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))