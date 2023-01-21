const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoriesScheme = new Schema({
  name: {
    type: String,
    required,
    minLength: 3,
  },
});

CategoriesScheme.virtual("url").get(function () {
  return `/catalog/catagories/${this._id}`;
});

module.exports = mongoose.model("Categories", CategoriesScheme);
