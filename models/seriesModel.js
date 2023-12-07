const mongoose = require("mongoose")

const seriesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        poster: {
            type: String,
            required: false,
            default: ""
        },
        number_of_seasons: {
            type: Number,
            required: true
        },
        year_first_released: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const mySeriesSchema = mongoose.model("SeriesModel", seriesSchema);
module.exports = mySeriesSchema;