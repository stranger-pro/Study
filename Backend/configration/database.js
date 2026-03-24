const mongoose = require("mongoose");
require('dotenv').config();


exports.connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("ant hi aarambh hai");
        })
        .catch((e) => {
            console.log('syntax sahi kar');
            console.log(e.message);
            process.exit(1);
        })
} 