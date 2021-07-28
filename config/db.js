const mongoose = require("mongoose");

require('dotenv').config({ path: '.env' });

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (e) {
        console.log(e);
        process.exit(1); // Kill process
    }
}

module.exports = connectDatabase;