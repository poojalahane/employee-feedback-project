import { useEffect, useState } from "react";
import FeedbackTable from "../components/FeedbackTable";

import { getFeedback } from "../services/feedbackService";

const AdminPage = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [category, setCategory] = useState("");

  const fetchFeedback = async (selectedCategory = "") => {
    const data = await getFeedback(selectedCategory);
    setFeedbackList(data);
  };

  useEffect(() => {
    fetchFeedback(category);
  }, [category]);

  return (
    <div className="container">
      <h1>Admin Feedback Dashboard</h1>

      <FeedbackTable feedbackList={feedbackList} refresh={fetchFeedback} />
    </div>
  );
};

export default AdminPage;
