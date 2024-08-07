import React, { useState } from "react";
import PropTypes from "prop-types";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import ReviewEditForm from "./ReviewEditForm";

import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

const Review = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    title,
    content,
    rating,
    tags,
    id,
    setPost,
    setReviews,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            reviews_count: prevPost.results[0].reviews_count - 1,
          },
        ],
      }));

      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.filter((review) => review.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <ReviewEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              title={title}
              rating={rating}
              tags={tags}
              profileImage={profile_image}
              setReviews={setReviews}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p><u>{title}</u></p>
              <p>{content}</p>
              <p>Rated:<b>{rating}</b></p>
              <p>{tags}</p>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

Review.propTypes = { // propTypes to avoid ESLint problems
  id: PropTypes.number.isRequired,
  profile_id: PropTypes.number.isRequired,
  profile_image: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  setPost: PropTypes.func.isRequired,
  setReviews: PropTypes.func.isRequired,
};

export default Review;
