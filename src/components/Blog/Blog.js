import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useDeleteBlogMutation } from "../../redux/blogs/blogs";
const Blog = ({ title, description, id }) => {
  const [deleteItem] = useDeleteBlogMutation();
  const handleDelete = (id) => {
    deleteItem(id);
    console.log(id)
  };
  return (
    <>
      <Col key={id}>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.dribbble.com/users/2543315/screenshots/16765731/mt-01_4x.png"
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="warning">Update</Button>
              <Button variant="danger" onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Blog;
