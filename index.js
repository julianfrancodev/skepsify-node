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
app.use('/api/meditations', require('./routes/Meditations'));
app.use('/api/favorites', require('./routes/Favorites'));
app.use('/api/recents', require('./routes/Recents'));
app.use('/api/tools', require('./routes/Tools'));
app.use('/api/topics', require('./routes/Topics'));
app.use('/api/audiomeditations', require('./routes/AudioMeditations'));
app.use('/api/podcasts', require('./routes/Podcast'));


app.listen(PORT, () => {
    console.log(`Server Runing in port ${PORT} 🙌`)
});