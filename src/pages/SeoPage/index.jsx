import { memo, useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const SeoPage = () => {
  const ref = useRef();
  const [form, setForm] = useState({
    title: "",
    desc: "",
    url: "",
    image: "",
    author: "",
    keywords: "",
  });

  const handleInputChange = (event) => {
    setForm((state) => ({ ...state, [event.target.id]: event.target.value }));
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

  return (
    <div className={classes.seoPage}>
      <PageHeading>HTML SEO Meta Generator</PageHeading>
      <div className={classes.container}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Website Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Should be a maximum of 20 characters"
            value={form.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Website Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Should be a maximum of 50 characters"
            value={form.desc}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Web URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="https://example.com"
            value={form.url}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Web SEO Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Must be in full URL. Ex: https://example.com/an-amazing-image.png"
            value={form.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter the author name here"
            value={form.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="keywords" className="form-label">
            Keywords
          </label>
          <input
            type="text"
            className="form-control"
            id="keywords"
            placeholder="Enter the keywords here"
            value={form.keywords}
            onChange={handleInputChange}
          />
        </div>
        {form.author && form.desc && form.image && form.keywords && form.title && form.url ? (
          <div>
            <div className="form-label d-flex align-items-center justify-content-between">
              <div className="w-100">HTML Meta Tags</div>
              <button
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-center"
                title="Copy"
                onClick={copy}
              >
                <i className="bi bi-clipboard"></i>
                <span className="d-inline-block ms-2">Copy</span>
              </button>
            </div>
            <textarea
              ref={ref}
              className="form-control"
              style={{ whiteSpace: "pre-line" }}
              rows={34}
              value={`<meta charset="utf-8" />
                <meta http-equiv="audience" content="General" />
                <meta http-equiv="content-language" content="en" />
                <meta name="resource-type" content="Document" />
                <meta name="distribution" content="Global" />
                <meta name="revisit-after" content="1 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="title" content="${form.title}" />
                <meta name="description" content="${form.desc}" />
                <meta name="image" content="${form.image}" />
                <meta name="author" content="${form.author}" />
                <meta name="copyright" content="${form.author}" />
                <meta name="keywords" content="${form.keywords}" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="${form.url}" />
                <meta property="og:site_name" content="${form.url}" />
                <meta property="og:title" content="${form.title}" />
                <meta property="og:description" content="${form.desc}" />
                <meta property="og:image" content="${form.image}" />
                <meta property="og:image:alt" content="${form.title}" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="${form.url}" />
                <meta property="twitter:title" content="${form.title}" />
                <meta property="twitter:description" content="${form.desc}" />
                <meta property="twitter:image" content="${form.image}" />
                <title>${form.title}</title>
                <link rel="canonical" href="${form.url}" />
                <link rel="icon" href="${form.image}" />
                <link rel="apple-touch-icon" href="${form.image}" />
              `}
              disabled
            ></textarea>
          </div>
        ) : (
          <p className="mt-4 text-danger">
            <small>**NOTE: Completely fill in all fields for the system to process the data automatically</small>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(SeoPage);
