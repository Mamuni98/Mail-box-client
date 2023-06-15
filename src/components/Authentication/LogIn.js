import { Card, Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import axios from "axios";
const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useNavigate();
  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_8f1cHLxMnbJtxEn5un83iu0J4hM-2d8",
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );

      const token = response.data.idToken;
      dispatch(authActions.logIn(token));
      alert("Successfully Logged In");
      history("/home");
    } catch (err) {
      const alertmsg = err.response.data.error.message;
      alert(alertmsg);
    }

    setIsLoading(false);
    event.target.reset();
  };
  return (
    <Card style={{ width: "25rem", marginTop: "3rem" }} className="mx-auto">
      <Card.Body>
        <div className="text-center text-primary mb-4">
          <h3>LOG IN</h3>
        </div>
        <div>
            <Form onSubmit={formSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>
              <div className="text-center mb-3">
                {!isLoading ? (
                  <Button variant="primary" type="submit">
                    Log In
                  </Button>
                ) : (
                  <h6 className="text-primary">Sending request...</h6>
                )}
              </div>
            </Form>
        </div>
        <h6 className="text-center">
          New User? <Link to="/">Create a new account</Link>
        </h6>
      </Card.Body>
    </Card>
  );
};
export default LogIn;
