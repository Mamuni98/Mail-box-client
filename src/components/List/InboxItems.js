import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inboxMailActions } from "../store/inbox-mail";
import { updateInboxMailData } from "../store/inboxMail-thunks";
import { BsDot } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { deleteInboxMailData } from "../store/inboxMail-thunks";
import { recycleBinActions } from "../store/recycle-bin";

const InboxItems = (props) => {
  const dispatch = useDispatch();

  const readMailHandler = () => {
    const updatedMail = {
      title: props.title,
      mail: props.mail,
      body: props.body,
      read: true,
    };
    const readMail = {
      ...props,
      ToFrom: "From",
    };

    dispatch(inboxMailActions.readMail(readMail));
    dispatch(inboxMailActions.updateInboxMails(props.id));
    dispatch(updateInboxMailData(props.id, updatedMail));
  };
  const deleteMailHandler = () => {
    const binMail = {
      id: props.id,
      title: props.title,
      mail: props.mail,
      body: props.body,
    };
    dispatch(inboxMailActions.deleteInboxMails(props.id));
    dispatch(deleteInboxMailData(props.id));
    dispatch(recycleBinActions.addInBin(binMail));
  };
  return (
    <li style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
          {!props.read && <BsDot color="blue" size={38} />}
          <Link
            to={`/inbox/${props.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 onClick={readMailHandler}>{props.title}</h5>
          </Link>
        </div>
        <div className="d-flex">
          <p className="mx-2">From: {props.mail}</p>
          <Button variant="primary" onClick={deleteMailHandler}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};
export default InboxItems;
