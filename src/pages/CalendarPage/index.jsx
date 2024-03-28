import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const CalendarPage = () => {
  return (
    <div className={classes.calendarPage}>
      <PageHeading>Calendar</PageHeading>
    </div>
  );
};

export default memo(CalendarPage);
