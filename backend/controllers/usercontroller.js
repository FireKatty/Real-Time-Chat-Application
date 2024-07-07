const User = require("../models/userModel")

const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;
        // console.log(loggedInUserId)

        const filteredUsers = await User.find({
            _id:{$ne: loggedInUserId}
        })

        // const filteredUsers = await User.find().select("-password");

        // const names = filteredUsers.map(item=>item.fullName)
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log('Error in getUserForSidebar Controller:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getUsersForSidebar;