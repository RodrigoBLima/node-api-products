const express = require('express')
const mongose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

mongose.connect(
    'mongodb://localhost:27017/nodepai',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

requireDir('./src/models')

app.use('/api', require("./src/routes"))

app.listen(3001)

