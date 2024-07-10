import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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

  // if statements to handle fields in form
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "content") setContent(value);
    if (name === "title") setTitle(value);
    if (name === "rating") setRating(value);
    if (name === "tags") setTags(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Title</b></Form.Label>
        <Form.Control // This is the field for the title of the review
          placeholder="give your review a title.."
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control // The actual review form
            className={styles.Form}
            placeholder="your review..."
            as="textarea"
            name="content" 
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <FormGroup>
        <Form.Label><b>Rating</b></Form.Label>
        <Form.Control
          type="number"
          name="rating"
          value={rating}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Form.Label><b>Tags</b></Form.Label>
        <Form.Control // Here's where tags will be added
          placeholder="tag your review e.g #acrylic, #photography, #sculpture etc.."
          type="text"
          name="tags"
          value={tags}
          onChange={handleChange}
        />
      </FormGroup>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        publish
      </button>
    </Form>
  );
}

export default ReviewCreateForm;
