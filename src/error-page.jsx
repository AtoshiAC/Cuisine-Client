import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Card from "react-bootstrap/Card";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <Card.Img
        src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Card image"
      />
      <h1 className="position-absolute top-50 start-50 translate-middle pb-5 text-danger">
        {error.status}
        {error.statusText}
      </h1>
      <Marquee
        className="position-absolute top-50 start-50 translate-middle pt-5"
        speed={100}
      >
        <p>
          Sorry, an unexpected error has occurred.
          <i>{error.statusText || error.message}</i>
        </p>
      </Marquee>
    </Container>
  );
}
