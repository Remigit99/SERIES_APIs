require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const SeriesRouter = require("./Routers/seriesRouter")

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/series", SeriesRouter)


const PORT = process.env.PORT || 8282

//connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Successfully connect to database")
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }).catch(err => console.log(err))

