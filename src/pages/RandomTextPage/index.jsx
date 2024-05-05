import { memo, useRef, useState } from "react";
import { generateRandomString } from "@/helpers/str";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const RandomTextPage = () => {
  const ref2 = useRef();
  const [randomStringLength, setRandomStringLength] = useState(16);
  const [randomString, setRandomString] = useState(generateRandomString(randomStringLength));

  const copy = (ref) => {
    if (
      window.location.protocol === "https" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      const copyText = ref.current;
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(copyText.value);
      alert("Copy to clipboard successfully");
    } else {
      alert("Cannot copy text to clipboard");
    }
  };

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Random Text</PageHeading>
      <div className={classes.container}>
        <label htmlFor="output" className="form-label d-flex align-items-center justify-content-between">
          <strong>
            Random text with
            <input
              type="number"
              style={{ width: "60px", margin: "0 4px", textAlign: "center" }}
              value={randomStringLength}
              onChange={(event) => setRandomStringLength(event.target.value)}
            />
            character(s)
          </strong>
          <button
            className="btn btn-sm btn-success"
            title="Copy"
            disabled={randomString.trim() === ""}
            onClick={() => copy(ref2)}
          >
            <i className="bi bi-clipboard"></i>
            <span className="ms-2 d-inline-block">Copy</span>
          </button>
        </label>
        <textarea
          className="form-control mb-3"
          id="output"
          rows="6"
          placeholder="Here is your output value"
          disabled={true}
          value={randomString}
          ref={ref2}
        ></textarea>
        <button
          className="btn btn-primary me-3"
          title="Copy"
          onClick={() => setRandomString(generateRandomString(randomStringLength))}
        >
          <span className="d-inline-block">Generate</span>
        </button>
      </div>
    </div>
  );
};

export default memo(RandomTextPage);
