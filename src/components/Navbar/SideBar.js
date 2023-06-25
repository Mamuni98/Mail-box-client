import { BsPlusCircleFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
const SideBar = () => {
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const inboxMails = useSelector((state) => state.inboxMail.inboxMails);
  let count = 0;
  for (let key in inboxMails) {
    if (inboxMails[key].read === false) {
      count = count + 1;
    }
  }
  return (
    <div
      style={{
        width: "13rem",
        borderRight: "3px solid grey",
        height: "540px",
      }}
      className={classes.menu}
    >
      <div className="d-flex align-items-center flex-column text-primary">
        {IsLoggedIn && (
          <NavLink
            to="/compose"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <h5 className="my-4">
              <BsPlusCircleFill /> Compose
            </h5>
          </NavLink>
        )}
        {IsLoggedIn && (
          <NavLink
            to="/inbox"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <h5 className="mb-4">
              <BsFillEnvelopeFill /> Inbox <Badge bg="secondary">{count}</Badge>
            </h5>
          </NavLink>
        )}
        {IsLoggedIn && (
          <NavLink
            to="/sentBox"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <h5 className="mb-4">
              <BsFillSendFill /> Sent
            </h5>
          </NavLink>
        )}
        {IsLoggedIn && (
          <NavLink
            to="/recycleBin"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            <h5>
              <FaTrash size={18} /> Bin
            </h5>
          </NavLink>
        )}
      </div>
    </div>
  );
};
export default SideBar;
