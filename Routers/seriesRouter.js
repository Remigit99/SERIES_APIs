const express = require("express")
const { postSeries, getSeries } = require("../controllers/seriesController")

const router = express.Router()

//Get all series
router.get("/", getSeries)

// Get a single series
router.get("/:id",)

//Post series
router.post("/", postSeries)

//Update a series
router.put("/:id",)

//Delete a series
router.delete("/:id",)

module.exports = router