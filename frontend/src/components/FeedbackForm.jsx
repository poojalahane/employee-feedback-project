import React, { useState } from "react";
import { postFeedback } from "../services/feedbackService";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work Environment");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await postFeedback({ text, category });
    setText("");
    setCategory("Work Environment");
    alert("Feedback submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        placeholder="Enter your feedback..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work Environment</option>
        <option>Leadership</option>
        <option>Growth</option>
        <option>Others</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
