const express = require("express")
const {sendMessage,getMessages}  = require("../controllers/messagecontroller")
const protctRoute = require("../middleware/protectRoutes");
const protectRoute = require("../middleware/protectRoutes");
const router = express.Router();

router.get('/:id',protectRoute,getMessages);
router.post("/send/:id",protctRoute,sendMessage);

module.exports = router;
