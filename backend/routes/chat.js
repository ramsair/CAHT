const express = require("express");
const { getMessages, sendMessage } = require("../controllers/chatController");

const router = express.Router();

//   Fetch Chat Messages
router.get("/:userId/:receiverId", getMessages);

//   Send a Message
router.post("/send", sendMessage);

module.exports = router;
