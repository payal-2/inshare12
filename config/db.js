require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

function connectDB() {
    // Database connection 
    mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(() => {
    console.log('Database connected 🥳');
})
.catch(err => {
    console.error('Database connection error:', err);
});
}

module.exports = connectDB;
