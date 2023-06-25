import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sentMailActions } from "../store/sent-mail";
const SentItems = (props) => {
  const dispatch = useDispatch();
  const updateReadMailHandler = () => {
    const readMail = {
      ...props,
      ToFrom: "To",
    };
    dispatch(sentMailActions.updateReadMail(readMail));
  };
  return (
    <li style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="d-flex">
          {!props.read && <BsDot color="blue" size={38} />}
          <Link
            to={`/sentBox/${props.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 onClick={updateReadMailHandler}>{props.title}</h5>
          </Link>
        </div>
        <p>To: {props.mail}</p>
      </div>
    </li>
  );
};
export default SentItems;
