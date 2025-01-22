/**
 * We have created this `/init` folder to initialise database with fresh data.
 * so, we can perform project setup and data initialisation in this file.
 */

const mongoose = require("mongoose");
const initData = require("./data.js"); // Importing data from data.js file.
const Listing = require("../models/listing.js"); // Importing Listing model from models folder.

const MONGO_URL = "mongodb+srv://Aditya_Sahu:hDpSv4EgVxV9iIax@cluster0.amwsbkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

/* Database connectivity setup */
main()
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data is initialized.");
};

initDB();