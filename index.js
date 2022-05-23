const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
const orderController = require('./controllers/orderController')

app.use(express.json());
app.use(cors())

app.get('/rota', orderController)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))





