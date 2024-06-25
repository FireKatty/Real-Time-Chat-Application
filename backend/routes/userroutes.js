const express  = require("express");
const protctRoute = require("../middleware/protectRoutes");
const getUsersForSidebar = require("../controllers/usercontroller");

const router = express.Router();

router.get("/",protctRoute,getUsersForSidebar);

module.exports = router;