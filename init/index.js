//Data Insertion
const mongoose = require('mongoose');
const Listing = require("../models/listing.js");
const initData = require("./data.js");

main()
.then(() => console.log(`Connection is Succesful`))     
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "683b302da36e6cac3d0ddad2",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data is initialised.");
}

initDB();
