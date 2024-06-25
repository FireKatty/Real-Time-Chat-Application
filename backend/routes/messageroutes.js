const express = require("express")
const {sendMessage,getMessages}  = require("../controllers/messagecontroller")
const protctRoute = require("../middleware/protectRoutes")
const router = express.Router();

router.get('/:id',protctRoute,getMessages);
router.post("/send/:id",protctRoute,sendMessage);

module.exports = router;
