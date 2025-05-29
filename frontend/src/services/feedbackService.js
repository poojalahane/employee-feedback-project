import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const postFeedback = async (data) => {
  await axios.post(`${API}/feedback`, data);
};

export const getFeedback = async (category = "") => {
  const res = await axios.get(`${API}/feedback`, {
    params: category ? { category } : {},
  });
  return res.data;
};

export const markFeedbackReviewed = async (id) => {
  await axios.patch(`${API}/feedback/${id}/reviewed`);
};

export const deleteFeedback = async (id) => {
  await axios.delete(`${API}/feedback/${id}`);
};
