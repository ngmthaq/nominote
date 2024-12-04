import { memo, useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const DependenciesToNpm = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const [input, setInput] = useState("");
  const [dependencyScript, setDependencyScript] = useState("");
  const [devDependencyScript, setDevDependencyScript] = useState("");

  const convertJsonToObject = () => {
    try {
      const obj = JSON.parse(input.trim());
      if (!obj.dependencies) throw new Error("dependencies not found");
      if (!obj.devDependencies) throw new Error("devDependencies not found");
      return { dependencies: obj.dependencies, devDependencies: obj.devDependencies };
    } catch (error) {
      console.error(error);
      alert("Cannot convert package.json file to object");
    }
  };

  const convertDeps2String = (deps) => {
    return Object.entries(deps)
      .map(([name, version]) => `${name}@${version}`)
      .join(" ");
  };

  const convertToNpmScript = () => {
    const deps = convertJsonToObject();
    if (deps) {
      const { dependencies, devDependencies } = deps;
      setDependencyScript(`npm install ${convertDeps2String(dependencies)}`);
      setDevDependencyScript(`npm install -D ${convertDeps2String(devDependencies)}`);
    }
  };

  const convertToYarnScript = () => {
    const deps = convertJsonToObject();
    if (deps) {
      const { dependencies, devDependencies } = deps;
      setDependencyScript(`yarn add ${convertDeps2String(dependencies)}`);
      setDevDependencyScript(`yarn add -D ${convertDeps2String(devDependencies)}`);
    }
  };

  const copy = (ref) => {
    if (
      window.location.protocol === "https:" ||
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
    setDependencyScript("");
    setDevDependencyScript("");
  };

  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Dependencies To Npm</PageHeading>
      <div className={`${classes.container}`}>
        <div className="row">
          <div className="col-12">
            <div className="mb-2">
              <label htmlFor="input" className="form-label">
                <strong>package.json</strong>
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
            <div className="d-flex align-items-center justify-content-start gap-2 mb-4">
              <button className="btn btn-outline-primary" style={{ alignSelf: "normal" }} onClick={convertToNpmScript}>
                Convert to npm script
              </button>
              <button className="btn btn-outline-primary" style={{ alignSelf: "normal" }} onClick={convertToYarnScript}>
                Convert to yarn script
              </button>
              <button className="btn btn-outline-primary" style={{ alignSelf: "normal" }} onClick={clear}>
                Clear
              </button>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-4">
              <label
                htmlFor="dependencyScript"
                className="form-label d-flex align-items-center justify-content-between"
              >
                <strong>Dependencies Install Script</strong>
                <button
                  className="btn btn-sm btn-success"
                  title="Copy"
                  disabled={dependencyScript.trim() === ""}
                  onClick={() => copy(ref1)}
                >
                  <i className="bi bi-clipboard"></i>
                  <span className="ms-2 d-inline-block">Copy</span>
                </button>
              </label>
              <textarea
                className="form-control"
                id="dependencyScript"
                rows="6"
                placeholder="Here is your script"
                disabled={true}
                value={dependencyScript}
                ref={ref1}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-4">
            <label
              htmlFor="devDependencyScript"
              className="form-label d-flex align-items-center justify-content-between"
            >
              <strong>Dev Dependencies Install Script</strong>
              <button
                className="btn btn-sm btn-success"
                title="Copy"
                disabled={devDependencyScript.trim() === ""}
                onClick={() => copy(ref2)}
              >
                <i className="bi bi-clipboard"></i>
                <span className="ms-2 d-inline-block">Copy</span>
              </button>
            </label>
            <textarea
              className="form-control"
              id="devDependencyScript"
              rows="6"
              placeholder="Here is your script"
              disabled={true}
              value={devDependencyScript}
              ref={ref2}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DependenciesToNpm);
