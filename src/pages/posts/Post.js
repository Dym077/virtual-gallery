import React from "react";
import styles from "../../styles/Post.module.css";
import { Card, OverlayTrigger } from "react-bootstrap";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-centerjustify-content-beteween">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title classname="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
            {is_owner ? (
                <OverlayTrigger placement="top" overlay={<Tooltip>You can't fancy your own stuff.</Tooltip>}>
                    <i className="far fa-heart" />
                </OverlayTrigger>
            ) : like_id ? (
                <span onClick={()=>}>
                    <i className={`fas fa-heart ${styles.Heart}`} />
                </span>
            ) : currentUser ? (
                <span onClick={() => {}}>
                <i className={`far fa-heart ${styles.HeartOutLine}`} />
                </span>
            ) : (
                <OverlayTrigger placement="top" overlay={<Tooltip>Sign in to like posts.</Tooltip>}>
                    <i className="far fa-heart" />
                </OverlayTrigger>
            )}
            {likes_count}
            <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
            </Link>
            {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
