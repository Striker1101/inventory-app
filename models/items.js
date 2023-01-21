const mongoose = require("mongoose");
const { DateTime } = require("luxon");
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  log: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  name: { type: String, required: true },
  number_in_stock: { type: Number, min: 1 },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

ItemsSchema.virtual("url").get(function () {
  return `/catalog/items/${this._id}`;
});

ItemsSchema.virtual('formatted_date').get(function(){
    return  DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
})