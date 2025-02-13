const mongoose = require("mongoose"); // Importing/Requiring mongoose from package.
const Schema = mongoose.Schema; // Importing mongoose module and Schema.
const Review = require("./review.js");

/* Schema defining */
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1560543332-e8e4ed182865?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1560543332-e8e4ed182865?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

// Post Mongoose Middleware
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

/* Model creating and exporting */
const Listing = mongoose.model("Listing", listingSchema); // Creating a model from the schema.
module.exports = Listing; // Exporting the model for use in other parts of the application.