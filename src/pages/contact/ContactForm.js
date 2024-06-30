import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";

import contactImage from ""
import styles from "../../styles/ContactForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const { name, subject, email, message } = contactData;

  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    resetForm();
  };
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = ["Name is required"];
    if (!subject) newErrors.subject = ["Subject is required"];
    if (!email) newErrors.email = ["Email is required"];
    if (!message) newErrors.message = ["Message is required"];
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("email", email);
    formData.append("message", message);

    try {
      await axiosReq.post("/contact/", formData);
      handleShow();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const resetForm = () => {
    setContactData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
    setErrors({});
  };


  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>What can we do for You?</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.subject?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.email?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="message"
          value={message}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.message?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Send
      </Button>
    </div>
  );

  return (
    
    <Form onSubmit={handleSubmit}>
      <Col className={`justify-content-center ${styles.ContactImage}`}>
        <img
          alt=""
          src={contactImage}
        />
      </Col>
      <h1 className={styles.ContactUsText}>Contact us!</h1>
      <Row className={styles.Row}>
        <Col className="col-md-7 col-lg-5 col-md-5">
          <Container className={styles.ContactContainer}>{textFields}</Container>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your message was sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank You! We will get back to You ASAP!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => history.goBack()}>
            Back to feed
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}

export default ContactForm;