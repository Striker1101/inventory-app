const express = require("express");
const router = express.Router();

//require controllers
const categories_controller = require("../controllers/categoriesController");

//Categories Route

// Get catalog home page
router.get("/", categories_controller.index);

