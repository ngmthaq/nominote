import { Fragment, memo, useEffect, useMemo, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import RequestNotification from "@/components/Common/RequestNotification";
import classes from "./style.module.scss";

const DashboardLayout = () => {
  const isMinimizeLocalKey = "isMinimizeLocalKey";
  const isMinimizeLocal = localStorage.getItem(isMinimizeLocalKey);

  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { title: "Search", link: "/dashboard/search", icon: <i className="bi bi-google"></i> },
      { title: "Calendar", link: "/dashboard/calendar", icon: <i className="bi bi-calendar-week-fill" /> },
      { title: "Task Board", link: "/dashboard/tasks", icon: <i className="bi bi-table" /> },
      { title: "Note Book", link: "/dashboard/notebook", icon: <i className="bi bi-card-text" /> },
      { title: "String Helper", link: "/dashboard/str", icon: <i className="bi bi-alphabet-uppercase" /> },
      { title: "Regular Expression", link: "/dashboard/regex", icon: <i className="bi bi-regex" /> },
      { title: "SEO Generator", link: "/dashboard/seo", icon: <i className="bi bi-search-heart" /> },
    ],
    [],
  );

  const [isMinimize, setIsMinimize] = useState(Boolean(isMobile || isMinimizeLocal));

  const handleToggleMinimize = () => {
    setIsMinimize(!isMinimize);
    if (isMinimize) localStorage.removeItem(isMinimizeLocalKey);
    else localStorage.setItem(isMinimizeLocalKey, 1);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    setIsMinimize(Boolean(isMobile || isMinimizeLocal));
  }, [isMobile, isMinimizeLocal]);

  useEffect(() => {
    const route = menuItems.find((item) => item.link === location.pathname);
    if (route) {
      document.title = route.title + " | Nominote";
    } else {
      document.title = "Nominote";
    }
  }, [location]);

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
            {isMobile ? (
              <i className="bi bi-emoji-smile"></i>
            ) : (
              <button className="btn btn-light" onClick={handleToggleMinimize}>
                {isMinimize ? <i className="bi bi-caret-right-fill"></i> : <i className="bi bi-caret-left-fill"></i>}
              </button>
            )}
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
