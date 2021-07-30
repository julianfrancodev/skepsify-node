const express = require("express");

const connectDatabase = require("./config/db");

const cors = require("cors");


const app = express();

connectDatabase();

app.use(cors());

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/Users'));
app.use('/api/auth',require('./routes/Auth'));

app.listen(PORT, () => {
    console.log(`Server Runing in port ${PORT}`)
});