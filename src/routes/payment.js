const express = require("express");
const { userAuth } = require("../middlewares/auth");

const razorpayInstance = require("../utils/razorpay");

const Payment = require("../models/payment");
const { membershipAmount } = require("../utils/constants");

const paymentRouter = express.Router();

// Route to create a Razorpay order and save it in the database
paymentRouter.post("/payment/create", userAuth, async (req, res) => {
  try {
    const { membershipType } = req.body;
    const { firstName, lastName, emailId } = req.user;

    // Create an order using Razorpay with required details
    const order = await razorpayInstance.orders.create({
      amount: membershipAmount[membershipType] * 100, // Amount in paisa (₹1 = 100 paisa)
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        firstName,
        lastName,
        emailId,
        membershipType: membershipType,
      },
    });

    // Create a new Payment document in MongoDB with order details
    const payment = new Payment({
      userId: req.user._id,
      orderId: order.id,
      status: order.status,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      notes: order.notes,
    });

    // Save the payment record to the database
    const savedPayment = await payment.save();

    // Send payment details back to frontend, including Razorpay public key
    res.json({ ...savedPayment.toJSON(), keyId: "rzp_test_WxrIhqSQFhUHs2" });
  } catch (err) {
    // Handle unexpected errors gracefully
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = paymentRouter;
