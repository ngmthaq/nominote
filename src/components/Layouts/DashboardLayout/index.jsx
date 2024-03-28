import { Fragment, memo, useMemo, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import RequestNotification from "@/components/Common/RequestNotification";
import classes from "./style.module.scss";

const DashboardLayout = () => {
  const isMinimizeLocalKey = "isMinimizeLocalKey";
  const isMinimizeLocal = localStorage.getItem(isMinimizeLocalKey);

  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { title: "Calendar", link: "/dashboard/calendar", icon: <i className="bi bi-calendar-week-fill" /> },
      { title: "Task Board", link: "/dashboard/tasks/board", icon: <i className="bi bi-table" /> },
      { title: "Task Kanban", link: "/dashboard/tasks/kanban", icon: <i className="bi bi-kanban" /> },
      { title: "Note Book", link: "/dashboard/notebook", icon: <i className="bi bi-card-text" /> },
      { title: "String Helper", link: "/dashboard/str/helpers", icon: <i className="bi bi-alphabet-uppercase" /> },
    ],
    [],
  );

  const [isMinimize, setIsMinimize] = useState(Boolean(isMinimizeLocal));

  const handleToggleMinimize = () => {
    setIsMinimize(!isMinimize);
    if (isMinimize) localStorage.removeItem(isMinimizeLocalKey);
    else localStorage.setItem(isMinimizeLocalKey, 1);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <Fragment>
      <RequestNotification />
      <div className={classes.dashboardLayout}>
        <div className={`${classes.sidebar} ${isMinimize ? classes.minimize : ""}`}>
          <div className={classes.logo}>
            <img src="/icon-512x512.png" alt="logo" />
            <h3>NOMINOTE</h3>
          </div>
          <div className={classes.nav}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                title={isMinimize ? item.title : ""}
                className={`${item.link === location.pathname ? classes.active : ""}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
            <a href="#" title={isMinimize ? "Logout" : ""} onClick={handleLogout}>
              <i className="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </a>
          </div>
          <div className={classes.menu}>
            <button className="btn btn-light" onClick={handleToggleMinimize}>
              {isMinimize ? <i className="bi bi-caret-right-fill"></i> : <i className="bi bi-caret-left-fill"></i>}
            </button>
          </div>
        </div>
        <div className={classes.outlet}>
          <div className={classes.outletInside}>
            <Outlet />
          </div>
          <div className={classes.copyright}>Copyright ©️ 2024 - {new Date().getFullYear()} | ngmthaq</div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(DashboardLayout);
