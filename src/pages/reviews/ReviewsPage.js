import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useLocation, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Review from "./Review";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";

import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import Artist from "../artists/Artist";

const ReviewsPage = ({ message }) => {
  const [reviews, setReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const { id } = useParams();

  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axiosReq.get(`/reviews/?artist=${id}`);
        setReviews(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    const fetchArtist = async () => {
      try {
        const { data } = await axiosReq.get(`/artists/${id}`);
        setArtistData(data);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    fetchArtist();
    fetchReviews();
  }, [pathname, currentUser, id]);

  return (
    <Row className="h-100 d-flex justify-content-center">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p className="text-center">Most followed profiles.</p>
        <PopularProfiles />

        <Artist {...artistData} isProfilePage={false} />

        {hasLoaded ? (
          <>

            {reviews.results.length ? (
              <InfiniteScroll
                children={reviews.results.map((artist) => (
                  <Review key={artist.id} {...artist} isProfilePage={false} />
                ))}
                dataLength={reviews.results.length}
                loader={<Asset spinner />}
                hasMore={!!reviews.next}
                next={() => fetchMoreData(reviews, setReviews)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
};

export default ReviewsPage;