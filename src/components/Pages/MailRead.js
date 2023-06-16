import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
const MailRead = () => {
  const email = useSelector((state) => state.inboxMail.mailRead);
  return (
    <Container
      className="w-75"
      style={{ position: "absolute", right: "2rem", top: "5rem" }}
    >
      <Form.Group className="mb-3">
        <Form.Label>From:</Form.Label>
        <Form.Control type="text" placeholder={email.mail} readOnly />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={email.title} readOnly />
      </Form.Group>
      <Form.Control as="textarea" rows={3} placeholder={email.body} readOnly />
    </Container>
  );
};
export default MailRead;
