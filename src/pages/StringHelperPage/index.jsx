import { memo, useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const StringHelperPage = () => {
  const ref = useRef();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const convertToUpperCase = () => {
    setOutput(input.toUpperCase());
  };

  const convertToLowerCase = () => {
    setOutput(input.toLowerCase());
  };

  const capitalizeFirstWord = () => {
    const chartAt0 = input.charAt(0);
    setOutput(chartAt0.toUpperCase() + input.substring(1));
  };

  const capitalizeEachWord = () => {
    setOutput(
      input
        .split(" ")
        .map((data) => {
          const chartAt0 = data.charAt(0);
          return chartAt0.toUpperCase() + data.substring(1);
        })
        .join(" "),
    );
  };

  const convertToSlug = () => {
    setOutput(
      input
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    );
  };

  const copy = () => {
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

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>String Helper</PageHeading>
      <div className={classes.container}>
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <label htmlFor="input" className="form-label">
                <strong>Input</strong>
              </label>
              <textarea
                className="form-control"
                id="input"
                rows="6"
                placeholder="Enter your input string here"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-4">
              <label htmlFor="output" className="form-label d-flex align-items-center justify-content-between">
                <strong>Output</strong>
                <button
                  className="btn btn-sm btn-outline-primary"
                  title="Copy"
                  disabled={output.trim() === ""}
                  onClick={copy}
                >
                  <i className="bi bi-clipboard"></i>
                </button>
              </label>
              <textarea
                className="form-control"
                id="output"
                rows="6"
                placeholder="Here is your output value"
                disabled={true}
                value={output}
                ref={ref}
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-start gap-2">
              <button className="btn btn-outline-secondary" onClick={convertToUpperCase}>
                CONVERT TO UPPERCASE
              </button>
              <button className="btn btn-outline-secondary" onClick={convertToLowerCase}>
                convert to lowercase
              </button>
              <button className="btn btn-outline-secondary" onClick={capitalizeFirstWord}>
                Capitalize first word
              </button>
              <button className="btn btn-outline-secondary" onClick={capitalizeEachWord}>
                Capitalize Each Word
              </button>
              <button className="btn btn-outline-secondary" onClick={convertToSlug}>
                convert-to-slug
              </button>
              <button className="btn btn-outline-secondary" onClick={clear}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StringHelperPage);
