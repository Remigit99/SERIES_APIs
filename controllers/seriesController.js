
const mongoose = require("mongoose")
const mySeriesSchema = require("../models/seriesModel")


const postSeries = async (req, res) => {
    try {
        const series = await mySeriesSchema.create(req.body)
        console.log(res.json(series))
        res.status(200).json(series)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


const getSeries = async (req, res) => {
    try {
        const series = await mySeriesSchema.find({})
        res.status(200).json(series)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = { postSeries, getSeries }