const Categories = require("../models/categories");
const { body, validationResult } = require("express-validator");
const Items = require("../models/items");
const async = require("async");
const async = require("async");

// display all categories
exports.index = (req, res) => {
  async.parallel(
    {
      item_count(callback) {
        Items.countDocuments({}, callback);
      },
    },
    (err, result) => {
        res.render('index', {
            title: 'Categories',
            error:err,
            data:result.item_count
        })
    }
  );
};
