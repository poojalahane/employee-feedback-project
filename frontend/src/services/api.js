const API_BASE = process.env.REACT_APP_API_URL;

export const submitFeedback = async (feedbackData) => {
  const res = await fetch(`${API_BASE}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });
  return res.json();
};

export const getAllFeedback = async () => {
  const res = await fetch(`${API_BASE}/feedback`);
  return res.json();
};

export const filterFeedback = async (category) => {
  const res = await fetch(`${API_BASE}/feedback?category=${category}`);
  return res.json();
};

export const markReviewed = async (id) => {
  const res = await fetch(`${API_BASE}/feedback/${id}/reviewed`, {
    method: "PATCH",
  });
  return res.json();
};

export const deleteFeedback = async (id) => {
  const res = await fetch(`${API_BASE}/feedback/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
