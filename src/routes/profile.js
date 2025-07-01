const express = require("express");
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

// Route to view user profile; requires authentication
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user; // user object is attached by userAuth middleware
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Route to edit user profile; requires authentication
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    // Validate request body against allowed profile fields
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    // Dynamically update fields sent in the request body
    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    // Save the updated user to the database
    await loggedInUser.save();

    // Respond with success message and updated data
    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfuly`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
