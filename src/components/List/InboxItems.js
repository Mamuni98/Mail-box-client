import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inboxMailActions } from "../store/inbox-mail";
import { updateInboxMailData } from "../store/inboxMail-thunks";
import { BsDot } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { deleteInboxMailData } from "../store/inboxMail-thunks";

const InboxItems = (props) => {
  const dispatch = useDispatch();

  const readMailHandler = () => {
    const updatedMail = {
      title: props.title,
      mail: props.mail,
      body: props.body,
      read: true,
    };
    dispatch(inboxMailActions.readMail(props));
    dispatch(inboxMailActions.updateInboxMails(props.id));
    dispatch(updateInboxMailData(props.id, updatedMail));
  };
  const deleteMailHandler = () => {
    dispatch(inboxMailActions.deleteInboxMails(props.id));
    dispatch(deleteInboxMailData(props.id));
  }
  return (
    <li style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
        {props.read === false ? <BsDot color="blue" size={38}/> : <BsDot color="white" />}
        <Link
          to={`/inbox/${props.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5 onClick={readMailHandler}>{props.title}</h5>
        </Link>
        </div>
        <p>From: {props.mail}</p>
        <Button variant="primary" onClick={deleteMailHandler}>Delete</Button>
      </div>
    </li>
  );
};
export default InboxItems;
