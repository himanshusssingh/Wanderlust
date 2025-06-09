const Listing = require("../models/listing.js");

module.exports.searchResult = async (req, res) => {
  const { location } = req.query;

  try {
    const allListing = await Listing.find({
      $or: [
        { location: { $regex: location, $options: "i" } },
        { country: { $regex: location, $options: "i" } }
      ]
    });

    res.render('listings/listing.ejs', { allListing });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};