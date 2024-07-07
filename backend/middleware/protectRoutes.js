const jwt = require ("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req, res, next) => {
	try {
        // console.log(req)
		const token = req.headers["authorization"];
        // console.log(token)
		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}
		// console.log("Decode",decoded)
		const user = await User.findById(decoded.userId).select("-password");
		// console.log("User",user)

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports =  protectRoute;
