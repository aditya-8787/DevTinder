const mongoose = require("mongoose");

// Define schema for connection requests between users
const connectionRequestSchema = new mongoose.Schema({
  // ID of the user sending the request
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // ID of the user receiving the request
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  // Current status of the request
  status: {
    type: String,
    required: true,
    enum: {
      values: ["ignored", "interested", "accepted", "rejected"], // Only these values allowed
      message: `{VALUE} is incorrect status type`,
    },
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Prevent duplicate requests between same two users using a compound index
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

// Pre-save hook: prevent users from sending a request to themselves
connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;

  // Throw error if sender and receiver are the same user
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot send connection request to yourself!");
  }

  next();
});

// Create and export the model
const ConnectionRequest = mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;
