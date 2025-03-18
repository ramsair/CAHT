const express = require("express");
const { getPublicKey } = require("../controllers/publicKeyController");

const router = express.Router();

// ✅ Route to fetch & verify public key from Backend & GitHub Gist
router.get("/:userId", getPublicKey);

module.exports = router;
