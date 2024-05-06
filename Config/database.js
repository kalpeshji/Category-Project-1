const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(
        'mongodb://localhost:27017/CategoryProject'
    );
    console.log("Database Connected..");
}

module.exports = db;