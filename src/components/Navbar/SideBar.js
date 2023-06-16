import { BsPlusCircleFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";
import { useSelector } from "react-redux";
const SideBar = () => {
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const inboxMails = useSelector((state) => state.inboxMail.inboxMails);
  let count = 0;
  for(let key in inboxMails){
    if(inboxMails[key].read === false){
      count = count+1;
    }
  }
  console.log(count);
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
        {IsLoggedIn && <NavLink
          to="/compose"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h5 className="my-3">
            <BsPlusCircleFill /> Compose
          </h5>
        </NavLink>}
        {IsLoggedIn && <NavLink
          to="/inbox"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h5 className="mb-3">
            <BsFillEnvelopeFill/> Inbox  {count}
          </h5>
        </NavLink>}
        {IsLoggedIn && <NavLink
          to="/sentBox"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h5 className="mb-3">
            <BsFillSendFill /> Sent
          </h5>
        </NavLink>}
        <h5>
          <FaTrash size={18} /> Bin
        </h5>
      </div>
    </div>
  );
};
export default SideBar;
