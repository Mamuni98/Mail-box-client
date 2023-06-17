import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SentItems from "../List/SentItems";
import { sentMailData } from "../store/sentMail-thunks";
import { useEffect } from "react";
const SentBox = () => {
  const sentMailLists = useSelector((state) => state.sentMail.sentMails);
  const changed = useSelector((state) => state.sentMail.changed);
  const dispatch = useDispatch();
  // let sentMails;
  // if (sentMailLists === null || sentMailLists === undefined) {
  //   sentMails = [];
  // } else {
  //   sentMails = sentMailLists;
  // }
  useEffect(() => {
    console.log(changed);
    if (changed) {
      dispatch(sentMailData(sentMailLists));
    }
  }, [changed, sentMailLists, dispatch]);

  return (
    <Container
      className="w-75"
      style={{ position: "absolute", right: "2rem", top: "5rem", left: "7rem" }}
    >
      <ul style={{ listStyle: "none" }}>
        {sentMailLists.map((item) => {
          return (
            <SentItems
              key={item.id}
              id={item.id}
              mail={item.mail}
              title={item.title}
              body={item.body}
              read={propTypes.read}
            />
          );
        })}
      </ul>
    </Container>
  );
};
export default SentBox;
