const Listing = require("../models/listing.js");

module.exports.home = async (_req, res) => {
    let allListing = await Listing.find();
    res.render("listings/listing.ejs", {allListing});
};

module.exports.renderNewForm =  (_req, res) => {
    res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listing");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing is not exist!");
        return res.redirect("/listing");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250")
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async(req, res) => {
    // let {id} = req.params;
    // await Listing.findByIdAndDelete(id);
    // req.flash("success", "Listing Deleted!");
    // res.redirect("/listing");

        try {
        const { id } = req.params;
        const deletedListing = await Listing.findByIdAndDelete(id);

        if (!deletedListing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listing");
        }

        req.flash("success", "Listing Deleted!");
        res.redirect("/listing");
    } catch (err) {
        console.error("Error deleting listing:", err);
        req.flash("error", "Something went wrong!");
        res.redirect("/listing");
    }

};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({path: "reviews", populate: {path: "author",},})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing is not exist!");
        res.redirect("/listing");
    }
    else                                                    //Want fix
    res.render("listings/show.ejs", {listing});
};