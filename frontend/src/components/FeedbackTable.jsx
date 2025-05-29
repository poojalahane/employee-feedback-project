import React, { useEffect, useState } from "react";
import {
  getAllFeedback,
  filterFeedback,
  markReviewed,
  deleteFeedback,
} from "../services/api";

const categories = [
  "All",
  "Work Environment",
  "Leadership",
  "Growth",
  "Others",
];

const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const fetchFeedback = async (category) => {
    setLoading(true);
    let data = [];
    if (category && category !== "All") {
      data = await filterFeedback(category);
    } else {
      data = await getAllFeedback();
    }
    setFeedbacks(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeedback(filter);
  }, [filter]);

  const handleMarkReviewed = async (id) => {
    await markReviewed(id);
    fetchFeedback(filter);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this feedback?")) {
      await deleteFeedback(id);
      fetchFeedback(filter);
    }
  };
  console.log(feedbacks);

  return (
    <div>
      <h2>Admin Feedback Dashboard</h2>

      <label>
        Filter by category:{" "}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ marginBottom: "1rem" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <table
          border="1"
          cellPadding="8"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Category</th>
              <th>Submitted At</th>
              <th>Reviewed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map(({ _id, text, category, createdAt, reviewed }) => (
              <tr
                key={_id}
                style={{ backgroundColor: reviewed ? "#d3ffd3" : "white" }}
              >
                <td>{text}</td>
                <td>{category}</td>
                <td>{new Date(createdAt).toLocaleString()}</td>
                <td>{reviewed ? "Yes" : "No"}</td>
                <td>
                  {!reviewed && (
                    <button onClick={() => handleMarkReviewed(_id)}>
                      Mark Reviewed
                    </button>
                  )}{" "}
                  <button onClick={() => handleDelete(_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackTable;
