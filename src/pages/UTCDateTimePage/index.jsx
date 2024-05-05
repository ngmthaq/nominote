import { memo, useEffect, useMemo, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const UTCDateTimePage = () => {
  const [date, setDate] = useState(new Date());
  const currentMilliseconds = useMemo(() => date.getTime(), [date]);
  const currentSeconds = useMemo(() => Math.floor(currentMilliseconds / 1000), [currentMilliseconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>UTC Date & Unix Timestamp</PageHeading>
      <div className={classes.container}>
        <div className="mb-3">
          <label htmlFor="datetime" className="form-label">
            UTC Date & Time
          </label>
          <input type="text" className="form-control" id="datetime" value={date.toUTCString()} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="milliseconds" className="form-label">
            Unix Timestamp in milliseconds
          </label>
          <input type="text" className="form-control" id="milliseconds" value={currentMilliseconds} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="seconds" className="form-label">
            Unix Timestamp in seconds
          </label>
          <input type="text" className="form-control" id="seconds" value={currentSeconds} disabled />
        </div>
      </div>
    </div>
  );
};

export default memo(UTCDateTimePage);
