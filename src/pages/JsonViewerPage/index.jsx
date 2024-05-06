import { memo, useState } from "react";
import JSONPretty from "react-json-pretty";
import PageHeading from "@/components/Common/PageHeading";
import "react-json-pretty/themes/monikai.css";
import classes from "./style.module.scss";

const JsonViewerPage = () => {
  const [source, setSource] = useState(``);

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>JSON Viewer</PageHeading>
      <div className={classes.container}>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Input
              </label>
              <textarea
                className="form-control"
                style={{ height: "660px" }}
                id="input"
                value={source}
                onChange={(event) => setSource(event.target.value)}
                placeholder="Enter your markdown content here"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label htmlFor="input" className="form-label">
                Output
              </label>
              <div className="border rounded p-4" style={{ height: "660px", overflowY: "scroll" }}>
                <JSONPretty data={source} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(JsonViewerPage);
