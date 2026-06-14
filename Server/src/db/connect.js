const mongoose = require("mongoose");
const { Schema } = mongoose;
const connectionString = process.env.MONGODB_URI || require("../../config/app-config.json").uri;
module.exports = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};