import { memo, useEffect, useState } from "react";
import classes from "./style.module.scss";

const Calendar = () => {
  const [days, setDays] = useState([]);
  const [date, setDate] = useState(new Date());

  date.setDate(1);
  const firstDayIndex = date.getDay() - 1;
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const inputMonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const inputValue = `${date.getFullYear()}-${inputMonth}`;

  const weekDays = days.reduce((weeks, day) => {
    if (weeks.length === 0) {
      weeks = [[day]];
    } else {
      const lastIndex = weeks.length - 1;
      if (weeks[lastIndex].length < 7) weeks[lastIndex].push(day);
      else weeks.push([day]);
    }
    return weeks;
  }, []);

  const handleChangeInput = (event) => {
    setDate(new Date(event.target.value));
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  useEffect(() => {
    const tmpDays = [];

    for (let x = firstDayIndex; x >= 0; x--) {
      tmpDays.push({ date: prevLastDay - x, type: "prevMonth" });
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
      ) {
        tmpDays.push({ date: i, type: "today" });
      } else {
        tmpDays.push({ date: i, type: "inMonth" });
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      tmpDays.push({ date: j, type: "nextMonth" });
    }

    setDays(tmpDays);
  }, [date]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
        <button className="btn text-secondary flex-shrink-0" onClick={handlePrevMonth}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <input
          type="month"
          className="form-control"
          value={inputValue}
          style={{ maxWidth: "200px" }}
          onChange={handleChangeInput}
        />
        <button className="btn text-secondary flex-shrink-0" onClick={handleNextMonth}>
          <i className="bi bi-chevron-right"></i>
        </button>
        <button className="btn btn-outline-primary flex-shrink-0">Add New Event</button>
      </div>
      <table className={`table table-bordered ${classes.calendarContainer}`}>
        <thead>
          <tr className="table-primary">
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weekDays.map((week, index) => (
            <tr key={index + "week"}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex + "day"}>
                  <div
                    className={`${classes.day} ${day.type === "inMonth" ? classes.inMonth : ""} ${day.type === "today" ? classes.today : ""}`}
                  >
                    <span>{day.date}</span>
                    <div></div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Calendar);
