const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })


const listingController = require("../controllers/listing.js");


router.route("/")
.get(wrapAsync(listingController.home))
.post(validateListing, isLoggedIn, upload.single('listing[image]'), wrapAsync(listingController.createListing))


router.get("/new", isLoggedIn, listingController.renderNewForm)

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

router.route("/:id")
.put(validateListing, isLoggedIn, isOwner, upload.single('listing[image]'), wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing))
.get(wrapAsync(listingController.showListing))


module.exports = router;