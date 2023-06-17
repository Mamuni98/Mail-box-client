const RecycleBinItems = (props) => {
  return (
    <li style={{ borderBottom: "1px solid grey", padding: "0.5rem" }}>
      <div className="d-flex flex-wrap justify-content-between">
        <h5>{props.title}</h5>
        <p>{props.body}</p>
        <p>From: {props.mail}</p>
      </div>
    </li>
  );
};
export default RecycleBinItems;
