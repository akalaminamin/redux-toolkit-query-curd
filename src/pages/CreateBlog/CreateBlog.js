import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { usePostBlogMutation } from "../../redux/blogs/blogs";
import { useNavigate, useParams } from "react-router-dom";
const CreateBlog = () => {
  const {id} = useParams();
  const [createBlog] = usePostBlogMutation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    const blogInfo = {
      title,
      description,
      image,
    };
    createBlog(blogInfo);
    e.target.reset();
    navigate("/");
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} lg={8} className="shadow-lg p-4">
          <h1 className="text-center fs-4">Create New Blog</h1>
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write your blog title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Blog Feature Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Blog Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Add Blog
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateBlog;
