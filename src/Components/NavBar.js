import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../Assets/logo-white.png";
import { UserAuth } from "../Context/AuthContext";

export default function NavBar() {
  const { user } = UserAuth();

  return (
    <div >
      <Navbar expand="lg" bg="" variant="light" style={{ borderBottom: "1px solid #F8C771", background:"#fd976c"}}>
        <Container>
          <Nav.Link as={Link} to="/" style={{ color: "white" }}>
            <img src={logo} width="100" height="100"  />
          </Nav.Link>
            <Nav className="ms-auto">
              {user ? (
                <Nav.Link as={Link} to="/profile">
                  <Button variant="light" size="lg">Profile</Button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/signin">
                  <Button variant="light">Sign In</Button>
                </Nav.Link>
              )}
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
