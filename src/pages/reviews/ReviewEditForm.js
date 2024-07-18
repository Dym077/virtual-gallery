import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/ReviewCreateEditForm.module.css";

function ReviewEditForm(props) {
  const { id, content, title, rating, tags, setShowEditForm, setReviews } = props;

  const [formContent, setFormContent] = useState(content);
  const [formTitle, setFormTitle] = useState(title);
  const [formRating, setFormRating] = useState(rating);
  const [formTags, setFormTags] = useState(tags);
  const [errors, setErrors] = useState({});

  // Handle all props individually
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "content") setFormContent(value);
    if (name === "title") setFormTitle(value);
    if (name === "rating") setFormRating(value);
    if (name === "tags") setFormTags(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!formTitle.trim()) newErrors.title = ["Title is required."];
    if (!formContent.trim()) newErrors.content = ["Content is required."];
    if (!formRating.trim()) newErrors.rating = ["Rating is required."];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axiosRes.put(`/reviews/${id}/`, {
        content: formContent.trim(),
        title: formTitle.trim(),
        rating: formRating,
        tags: formTags.trim(),
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? {
                ...review,
                content: formContent.trim(),
                title: formTitle.trim(),
                rating: formRating,
                tags: formTags.trim(),
                updated_at: "now",
              }
            : review;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Label><b>Title</b></Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formTitle}
          onChange={handleChange}
        />
        {errors?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group className="pr-1">
        <Form.Label><b>Rating</b></Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={formRating}
          onChange={handleChange}
        />
        {errors?.rating?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group className="pr-1">
        <Form.Label><b>Tags</b></Form.Label>
        <Form.Control
          type="text"
          name="tags"
          value={formTags}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="pr-1">
        <Form.Label><b>Content</b></Form.Label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          name="content"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
        {errors?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim()}
          type="submit"
        >
          update
        </button>
      </div>
    </Form>
  );
}

ReviewEditForm.propTypes = { // propTypes to avoid ESLint problems
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  setShowEditForm: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
};

export default ReviewEditForm;
