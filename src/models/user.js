const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Define user schema with fields and validation
const userSchema = new mongoose.Schema({

  // First name is required with a minimum and maximum length
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50,
  },

  // Last name is optional
  lastName: {
    type: String
  },

  // Email must be valid, unique, lowercase and trimmed
  emailId: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `Invalid email address: ${props.value}`,
    },
  },

  // Password must be strong and is required
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isStrongPassword(value),
      message: (props) => `Enter a strong password: ${props.value}`,
    },
  },

  // Age should be at least 18 if provided
  age: {
    type: Number,
    min: 18,
  },

  // Gender must be one of: male, female, others
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender data is not valid");
      }
    },
  },

  // User photo URL must be a valid URL
  photoUrl: {
    type: String,
    validate: {
      validator: (value) => validator.isURL(value),
      message: (props) => `Invalid Photo URL: ${props.value}`,
    },
  },

  // About section with a default value
  about: {
    type: String,
    default: "This is a default about of the user!",
  },

  // List of skills as an array of strings
  skills: {
    type: [String],
  },

}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create a compound index on firstName and
