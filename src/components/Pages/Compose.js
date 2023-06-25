import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Container, Form, FloatingLabel, Button } from "react-bootstrap";
import classes from "./Compose.module.css";
import { useDispatch } from "react-redux";
import { sentMailActions } from "../store/sent-mail";
import { inboxMailData } from "../store/inboxMail-thunks";
import { useNavigate } from "react-router-dom";
const Compose = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const emailRef = useRef();
  const titleRef = useRef();
  const sendMailHandler = (event) => {
    event.preventDefault();
    const body = convertToRaw(editorState.getCurrentContent());
    const text = body.blocks[0].text;
    const receiverMail = emailRef.current.value;
    const title = titleRef.current.value;
    const sendMailData = {
      id: Math.random().toString(),
      mail: receiverMail,
      title: title,
      body: text,
      read: false,
    };
    if (receiverMail.length > 0) {
      //console.log(receiverMail);
      dispatch(sentMailActions.addMail(sendMailData));
    }
    const userMail = localStorage.getItem("email");
    const inboxData = {
      mail: userMail,
      title: title,
      body: text,
      read: false,
    };
    if (userMail.length > 0 && receiverMail.length > 0) {
      dispatch(inboxMailData(receiverMail, inboxData));
    }
    history("/inbox");
  };

  return (
    <Container
      className="w-75"
      style={{ position: "absolute", right: "2rem", top: "5rem" }}
    >
      <FloatingLabel label="To" className="mb-3">
        <Form.Control
          type="email"
          placeholder="name@example.com"
          ref={emailRef}
        />
      </FloatingLabel>
      <FloatingLabel label="Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter title of your mail"
          ref={titleRef}
        />
      </FloatingLabel>
      <div style={{ width: "55rem" }} className="mb-4">
        <Editor
          editorState={editorState}
          wrapperClassName={classes.wrapper}
          editorClassName={classes.editor}
          onEditorStateChange={setEditorState}
        />
      </div>
      <div className="text-center">
        <Button variant="primary" size="lg" onClick={sendMailHandler}>
          Send
        </Button>
      </div>
    </Container>
  );
};
export default Compose;
