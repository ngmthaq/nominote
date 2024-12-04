import { memo, useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const WordCountPage = () => {
  const ref2 = useRef();
  const [input, setInput] = useState("");

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Word Counter</PageHeading>
      <div className={classes.container}>
        <label htmlFor="output" className="form-label d-flex align-items-center justify-content-between">
          <strong>Input</strong>
        </label>
        <textarea
          className="form-control mb-3"
          id="output"
          rows="6"
          placeholder="Here is your output value"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          ref={ref2}
        ></textarea>
        <p>
          <small className="text-danger">** NOTE: The system only supports Latin letters</small>
        </p>
        <p>Total character(s): {input.length}.</p>
        <p>Total word(s): {input.split(" ").filter((word) => word !== "").length}.</p>
      </div>
    </div>
  );
};

export default memo(WordCountPage);
