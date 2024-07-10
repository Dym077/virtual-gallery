import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/ReviewCreateEditForm.module.css";

function ReviewEditForm(props) {
  const { id, content, title, rating, tags, setShowEditForm, setReviews } = props; // All props are defined here

  
  const [formContent, setFormContent] = useState(content);
  const [formTitle, setFormTitle] = useState(title);
  const [formRating, setFormRating] = useState(rating);
  const [formTags, setFormTags] = useState(tags);

  // Handles all props individually
  const handleChange = (event) => { 
    const { name, value } = event.target;
    if (name === "content") setFormContent(value);
    if (name === "title") setFormTitle(value);
    if (name === "rating") setFormRating(value);
    if (name === "tags") setFormTags(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      console.log(err);
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
      </Form.Group>
      <Form.Group className="pr-1">
        <Form.Label><b>Rating</b></Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={formRating}
          onChange={handleChange}
        />
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

export default ReviewEditForm;
