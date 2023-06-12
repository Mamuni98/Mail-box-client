import { Navbar, Container, Nav, Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand
          style={{ font: "30px Arial", color: "rgb(251, 233, 38)" }}
        >
          Mail-Box
        </Navbar.Brand>
        <Nav className={classes.list} style={{ marginInline: "auto" }}>
          <Nav.Item>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/logIn"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Log In
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Sign Up
            </NavLink>
          </Nav.Item>
          <Button variant="warning">
            Log Out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
