const express = require("express")
const { registerUser, loginUser, getUser } = require("../controllers/userController")
const routes = express.Router()

//Get User
routes.get("/:id", getUser)

//Register User
routes.post("/register", registerUser)

//Login User
routes.post("/login", loginUser)