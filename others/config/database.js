const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri || !uri.startsWith('mongodb')) {
    throw new Error('MONGODB_URI is missing or invalid. Set it to your MongoDB Atlas connection string.');
  }

  try {
    const conn = await mongoose.connect(uri, {
      maxPoolSize: 50,
      minPoolSize: 5,
      maxIdleTimeMS: 60000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 10000,
      family: 4
    });
    console.log(`✅ MongoDB Connected to Atlas: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    throw new Error(`MongoDB Atlas connection failed: ${error.message}`);
  }
};

module.exports = connectDB;

