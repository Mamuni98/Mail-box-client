import InboxItems from "../List/InboxItems";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const Inbox = () => {
    const inboxMails = useSelector((state)=> state.inboxMail.inboxMails);
    return (
        <Container
          className="w-75"
          style={{ position: "absolute", right: "2rem", top: "5rem", left: "7rem" }}
        >
          <ul style={{ listStyle: "none" }}>
            {inboxMails.map((item) => {
              return (
                <InboxItems
                  key={item.id}
                  id={item.id}
                  mail={item.mail}
                  title={item.title}
                  body={item.body}
                />
              );
            })}
          </ul>
        </Container>
      );
}
export default Inbox;
