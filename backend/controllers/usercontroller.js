const User = require("../models/userModel")

const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id:{$ne: loggedInUserId}
        })

        const names = filteredUsers.map(item=>item.fullName)
        res.status(200).json(names);

    } catch (error) {
        console.log('Error in getUserForSidebar Controller:', error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = getUsersForSidebar;