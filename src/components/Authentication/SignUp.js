import { Card, Form, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const history = useNavigate();
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm = confirmRef.current.value;
    if (email.length > 0 && password.length > 0 && password === confirm) {
      try {
        const response = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_8f1cHLxMnbJtxEn5un83iu0J4hM-2d8",
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        );
        if (response) {
          alert("Successfully Signed Up");
        }
        history("/logIn");
      } catch (err) {
        const alertmsg = err.response.data.error.message;
        alert(alertmsg);
      }
      setIsLoading(false);
      event.target.reset();
    } else {
      alert("Invalid input. Please check all the input fields again.");
      setIsLoading(false);
    }
  };
  return (
    <Card style={{ width: "28rem", marginTop: "3rem" }} className="mx-auto">
      <Card.Body>
        <div className="text-center text-primary mb-4">
          <h3>SIGN UP</h3>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={confirmRef}
              />
            </Form.Group>
            <div className="text-center mb-3">
              {!isLoading ? (
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              ) : (
                <h6 className="text-primary">Signing In...</h6>
              )}
            </div>
          </Form>
        </div>
        <h6 className="text-center">
          Already have an account? <Link to="/logIn">Go to Log In</Link>
        </h6>
      </Card.Body>
    </Card>
  );
};
export default SignUp;
