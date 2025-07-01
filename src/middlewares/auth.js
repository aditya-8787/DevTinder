const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Middleware to authenticate a user based on JWT stored in cookies
const userAuth = async (req, res, next) => {
  try {
    // Read the token from cookies
    const { token } = req.cookies;

    // If no token is found, user is not logged in
    if (!token) {
      return res.status(401).send("Please Login !");
    }

    // Verify the token using the secret key
    const decodedMessage = await jwt.verify(token, "DEV@Tinder$790");

    // Extract the user ID from the decoded token payload
    const { _id } = decodedMessage;

    // Find the user in the database by ID
    const user = await User.findById(_id);

    // If user doesn't exist in DB, throw error
    if (!user) {
      throw new Error("User not found");
    }

    // Attach the user to the request object so downstream routes can access it
    req.user = user;

    // Proceed to the next middleware or route handler
    next();

  } catch (error) {
    // If token is invalid or any error occurs, respond with 400
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports = {
  userAuth,
};
