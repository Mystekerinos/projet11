import "./Collapse.scss";
import { useState } from "react";
import IconChevron from "../Icons/Chevron";

function Collapse(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={
          open ? "list-item reverse icon-wrapper" : "list-item icon-wrapper"
        }
        onClick={toggle}
      >
        <p>{props.title}</p>
        <IconChevron />
      </div>
      <div className="">
        {open && <div className="collapsed-text">{props.text}</div>}
      </div>
    </>
  );
}

export default Collapse;
