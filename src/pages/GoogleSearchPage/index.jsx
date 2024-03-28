import { memo, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const GoogleSearchPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    window.open("https://www.google.com.vn/search?q=" + search, "_blank");
  };

  return (
    <div className={classes.googleSearchPage}>
      <PageHeading>Search</PageHeading>
      <div className={classes.container}>
        <form onSubmit={handleSearch} className="d-flex flex-column align-items-center justify-content-center gap-4">
          <h1 className="mt-5">Google Search</h1>
          <input
            type="text"
            className="form-control form-control-lg"
            style={{ maxWidth: "800px" }}
            placeholder="Enter something here..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(GoogleSearchPage);
