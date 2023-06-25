import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const MailRead = () => {
  const inboxemail = useSelector((state) => state.inboxMail.mailRead);
  const sentemail = useSelector((state) => state.sentMail.mailRead);
  const param = useParams();
  //console.log(param.mailId);
  let read;
  if(param.mailId === inboxemail.id){
    read = inboxemail;
  }
  else{
    read = sentemail;
  }
  return (
    <Container
      className="w-75"
      style={{ position: "absolute", right: "2rem", top: "5rem" }}
    >
      <Form.Group className="mb-3">
        <Form.Label>{read.ToFrom} :</Form.Label>
        <Form.Control type="text" placeholder={read.mail} readOnly />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={read.title} readOnly />
      </Form.Group>
      <Form.Control as="textarea" rows={3} placeholder={read.body} readOnly />
    </Container>
  );
};
export default MailRead;
