

const InboxItems = (props) => {
 
  return (
    <li style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
      <div className="d-flex flex-wrap justify-content-between">
        <h5>{props.title}</h5>
        <p>From: {props.mail}</p>
      </div>
    </li>
  );
};
export default InboxItems;
