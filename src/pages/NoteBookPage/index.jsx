import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const NoteBookPage = () => {
  return (
    <div className={classes.noteBookPage}>
      <PageHeading>Note Book</PageHeading>
    </div>
  );
};

export default memo(NoteBookPage);
