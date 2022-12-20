import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/pepper-black.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";

function Footer() {
  return (
    <div style={{ background: "#fd976c" }}>
      <Container>
        <Row className="d-flex align-items-center justify-content-around" xs={1} md={3} lg={3}>
          <Col className="d-flex align-items-center justify-content-beggining py-3">
            <Link to="/" style={{ color: "white", listStyle: "none" }}>
              <img src={logo} width="80" height="80" />
            </Link>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
          <h6>
          A Little Pepper © 2022
            </h6>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <Link className="me-3" style={{color:"black"}}>
            <img src={twitter} width="40" height="40" />
            </Link>
            <Link className="ms-3" style={{color:"black"}}>
            <img src={instagram} width="40" height="40" />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
