import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const SeoPage = () => {
  return (
    <div className={classes.seoPage}>
      <PageHeading>SEO Generator</PageHeading>
    </div>
  );
};

export default memo(SeoPage);
