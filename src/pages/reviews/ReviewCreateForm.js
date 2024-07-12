import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/ReviewCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { FormGroup } from "react-bootstrap";

function ReviewCreateForm(props) {
  const { post, setPost, setReviews, profileImage, profile_id } = props;
  
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "content") setContent(value);
    if (name === "title") setTitle(value);
    if (name === "rating") setRating(value);
    if (name === "tags") setTags(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!title.trim()) newErrors.title = ["Title is required."];
    if (!content.trim()) newErrors.content = ["Content is required."];
    if (!rating.trim()) newErrors.rating = ["Rating is required."];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { data } = await axiosRes.post("/reviews/", {
        content,
        post,
        title,
        rating,
        tags,
      });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: [data, ...prevReviews.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            reviews_count: prevPost.results[0].reviews_count + 1,
          },
        ],
      }));
      setContent("");
      setTitle("");
      setRating("");
      setTags("");
      setErrors({});
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) { // If form is not properly filled in, this should trigger an error response
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Title *</b></Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        {errors?.title?.map((message, idx) => ( // These messages should alert the user
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="your review..."
            as="textarea"
            name="content" 
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>  
        {errors?.content?.map((message, idx) => ( // These messages should alert the user
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <FormGroup>
        <Form.Label><b>Rating *</b></Form.Label>
        <Form.Control
          placeholder="enter a number 1 - 5"
          type="number"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
        {errors?.rating?.map((message, idx) => ( // These messages should alert the user
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </FormGroup>
      <FormGroup>
        <Form.Label><b>Tags</b></Form.Label>
        <Form.Control
          placeholder="tag your review e.g #acrylic, #photography, #sculpture etc.."
          type="text"
          name="tags"
          value={tags}
          onChange={handleChange}
        />
      </FormGroup>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim() || !title.trim() || !rating.trim()}
        type="submit"
      >
        publish
      </button>
    </Form>
  );
}

export default ReviewCreateForm;
