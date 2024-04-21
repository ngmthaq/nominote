import { memo, useEffect, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const KeyboardHelperPage = () => {
  const [event, setEvent] = useState(null);

  const handleKeyboardEvent = (event) => {
    console.log(event);
    setEvent(event);
  };

  useEffect(() => {
    document.addEventListener("keyup", handleKeyboardEvent);
    return () => document.removeEventListener("keyup", handleKeyboardEvent);
  });

  return (
    <div className={classes.keyboardHelperPage}>
      <PageHeading>Keyboard Helper</PageHeading>
      <div className={classes.container}>
        {event ? <p>You pressed {event?.code}</p> : <p>Press any key to see the information</p>}
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row" style={{ width: "20%" }}>
                code
              </th>
              <td>{event?.code || "empty"}</td>
            </tr>
            <tr>
              <th scope="row">key</th>
              <td>{event?.key || "empty"}</td>
            </tr>
            <tr>
              <th scope="row">keyCode</th>
              <td>{event?.keyCode || "empty"}</td>
            </tr>
            <tr>
              <th scope="row">which</th>
              <td>{event?.which || "empty"}</td>
            </tr>
            <tr>
              <th scope="row">altKey</th>
              <td>{event?.altKey ? "true" : "false"}</td>
            </tr>
            <tr>
              <th scope="row">ctrlKey</th>
              <td>{event?.ctrlKey ? "true" : "false"}</td>
            </tr>
            <tr>
              <th scope="row">metaKey</th>
              <td>{event?.metaKey ? "true" : "false"}</td>
            </tr>
            <tr>
              <th scope="row">shiftKey</th>
              <td>{event?.shiftKey ? "true" : "false"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(KeyboardHelperPage);
