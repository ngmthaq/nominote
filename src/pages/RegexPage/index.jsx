import { memo, useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import CharacterClasses from "./components/CharacterClasses";
import classes from "./style.module.scss";
import "./style.scss";

const RegexPage = () => {
  const ref = useRef();
  const [regexString, setRegexString] = useState("[a-zA-Z0-9\\s]+");
  const [regexFlag, setRegexFlag] = useState("g");
  const [testString, setTestString] = useState("My Test String 12345");

  const syntaxHighlight = (json) => {
    if (typeof json != "string") {
      json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\\-]?\d+)?)/g,
      function (match) {
        var cls = "number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return '<span class="' + cls + '">' + match + "</span>";
      },
    );
  };

  const getRegex = () => {
    try {
      return new RegExp(regexString, regexFlag);
    } catch (error) {
      return "";
    }
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

  const regex = getRegex();
  const found = testString.match(regex);
  console.log("Regex match:", found);

  return (
    <div className={classes.regexPage}>
      <PageHeading>JavaScript Regular Expression</PageHeading>
      <div className={classes.container}>
        <div className="row">
          <div className="col-12">
            <div>
              <label htmlFor="regex" className="form-label">
                Regular Expression
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">REGEX</span>
                <input
                  type="text"
                  className="form-control"
                  id="regex"
                  placeholder="Insert your regex here"
                  value={regexString}
                  onChange={(event) => setRegexString(event.target.value)}
                />
                <span className="input-group-text">FLAG ( g, m, i, x, s, u, U, A, J, D )</span>
                <input
                  type="text"
                  className="form-control"
                  id="modifier"
                  placeholder="Insert your regex flag here"
                  value={regexFlag}
                  onChange={(event) => setRegexFlag(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Full Regular Expression</label>
                <div className="input-group">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    placeholder="REGEX"
                    value={regex.toString()}
                    onChange={(event) => setRegexFlag(event.target.value)}
                    ref={ref}
                  />
                  <button className="btn btn-sm btn-success" onClick={copy}>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="test-string" className="form-label">
                Test string
              </label>
              <input
                type="text"
                className="form-control"
                id="test-string"
                placeholder="Insert your test string here"
                value={testString}
                onChange={(event) => setTestString(event.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="match-string" className="form-label">
                Match string
              </label>
              <pre
                className="rounded-2 p-2 bg-white"
                dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.stringify(found)) }}
              ></pre>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.container} my-3`}>
        <CharacterClasses />
      </div>
    </div>
  );
};

export default memo(RegexPage);
