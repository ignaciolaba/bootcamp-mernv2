const express = require('express');
const app = express();
const PORT = 4000;
const {dbConnection} = require('./config/config')

dbConnection()


app.use(express.json());
app.use('/api/chistes', require('./routes/chistes'))


app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
})


