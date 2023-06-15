import { BsPlusCircleFill } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div
      style={{
        width: "13rem",
        borderRight: "3px solid grey",
        height: "540px",
      }} className={classes.menu}
    >
      <div className="d-flex align-items-center flex-column text-primary">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <h5 className="my-3">
            <BsPlusCircleFill /> Compose
          </h5>
        </NavLink>
        <h5 className="mb-3">
          <BsFillSendFill /> Sent
        </h5>
        <h5>
          <FaTrash size={18} /> Bin
        </h5>
      </div>
    </div>
  );
};
export default SideBar;
