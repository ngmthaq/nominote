import { memo, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const Milliseconds2DatePage = () => {
  const [currentMilliseconds, setCurrentMilliseconds] = useState("");
  const [date, setDate] = useState(null);

  const utc = date ? date.toUTCString() : "";
  const current = date ? date.toString() : "";

  const handleSetDate = () => {
    try {
      setDate(new Date(currentMilliseconds));
    } catch (error) {
      console.error(error);
      alert("Something wrong, please try again later");
    }
  };

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Convert Unix Timestamp (milliseconds) to Date</PageHeading>
      <div className={classes.container}>
        <div className="mb-3">
          <label htmlFor="seconds" className="form-label">
            Unix Timestamp
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="seconds"
              value={currentMilliseconds}
              onChange={(event) => setCurrentMilliseconds(event.target.value)}
              placeholder="Enter the milliseconds here"
            />
            <button className="btn btn-outline-success" onClick={() => setCurrentMilliseconds(Date.now())}>
              Now
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="seconds" className="form-label">
            UTC Date
          </label>
          <input
            type="text"
            className="form-control"
            id="seconds"
            placeholder="UTC Date & Time will go here"
            value={utc}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="seconds" className="form-label">
            Current Date
          </label>
          <input
            type="text"
            className="form-control"
            id="seconds"
            value={current}
            placeholder="Current Date & Time will go here"
            disabled
          />
        </div>
        <button className="btn btn-primary" onClick={handleSetDate} disabled={currentMilliseconds === ""}>
          Convert
        </button>
      </div>
    </div>
  );
};

export default memo(Milliseconds2DatePage);
