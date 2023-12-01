require("dotenv").config()
const express = require("express")
const app = express()


const PORT = process.env.PORT || 8282


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})