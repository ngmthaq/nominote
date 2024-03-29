import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import Calendar from "@/components/Common/Calendar";
import classes from "./style.module.scss";

const CalendarPage = () => {
  return (
    <div className={classes.calendarPage}>
      <PageHeading>Calendar</PageHeading>
      <div className={classes.container}>
        <Calendar />
      </div>
    </div>
  );
};

export default memo(CalendarPage);
