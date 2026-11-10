const express = require("express");
const router = express.Router();
const komikController = require("../controllers/komikController");

const {
    komikSchema, idSchema, validateBody, validateParams 
} = require("../middleware/komikValidator");

