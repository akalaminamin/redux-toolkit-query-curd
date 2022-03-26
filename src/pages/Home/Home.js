import React from "react";
import { Row, Container } from "react-bootstrap";
import Blog from "../../components/Blog/Blog";
import { useGetBlogsQuery } from "../../redux/blogs/blogs";
const Home = () => {
  const { isLoading, isSuccess, isError, data } = useGetBlogsQuery();
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {isLoading
          ? "Loading..."
          : data.map((dt) => (
              <Blog title={dt.title} description={dt.description} id={dt._id} />
            ))}
      </Row>
    </Container>
  );
};

export default Home;
