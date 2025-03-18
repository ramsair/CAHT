const express = require("express");
const { signUpUser,googleSignup } = require("../../backend/controllers/authController");

const router = express.Router();
console.log("GOOLE STEP 1.1")
router.post("/", signUpUser);


// Google Signup Route
router.post("/auth/google", googleSignup);
module.exports = router;
