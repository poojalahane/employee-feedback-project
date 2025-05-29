const express = require("express");
const router = express.Router();
const {
  createFeedback,
  getFeedback,
  markReviewed,
  deleteFeedback,
} = require("../controllers/feedbackController");

router.post("/feedback", createFeedback);
router.get("/feedback", getFeedback);
router.patch("/feedback/:id/reviewed", markReviewed);
router.delete("/feedback/:id", deleteFeedback);

module.exports = router;
