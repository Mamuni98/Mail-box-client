import { Card, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../customHooks/use-authhttp";

const SignUp = () => {
  const { isLoading, authPostRequest } = useHttp();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm = confirmRef.current.value;
    const body = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_8f1cHLxMnbJtxEn5un83iu0J4hM-2d8";
    authPostRequest(url, body, confirm);
    event.target.reset();
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
