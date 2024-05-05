import { memo, useEffect, useMemo, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import classes from "./style.module.scss";
import { LOCAL_STORAGE_KEYS } from "@/configs/constants";

const DashboardLayout = () => {
  const isMinimizeLocalKey = LOCAL_STORAGE_KEYS.minimizedSidebar;
  const isMinimizeLocal = localStorage.getItem(isMinimizeLocalKey);

  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { title: "Common Helpers", link: "@divider" },
      { title: "Search", link: "/_/search", icon: <i className="bi bi-google"></i> },
      { title: "Calendar", link: "/_/calendar", icon: <i className="bi bi-calendar-week-fill" /> },
      { title: "Task Board", link: "/_/tasks", icon: <i className="bi bi-table" /> },
      { title: "Text Helpers", link: "@divider" },
      { title: "Text Converter", link: "/_/text/converter", icon: <i className="bi bi-type" /> },
      { title: "Random Text", link: "/_/text/random", icon: <i className="bi bi-alphabet-uppercase" /> },
      { title: "Keyboard Helpers", link: "@divider" },
      { title: "Keyboard Event", link: "/_/keyboard/event", icon: <i className="bi bi-keyboard" /> },
      { title: "HTML/CSS/JS Helpers", link: "@divider" },
      { title: "SEO Meta Generator", link: "/_/html/seo", icon: <i className="bi bi-search-heart" /> },
      { title: "Javascript RegEx", link: "/_/js/regex", icon: <i className="bi bi-regex" /> },
    ],
    [],
  );

  const [isMinimize, setIsMinimize] = useState(Boolean(isMobile || isMinimizeLocal));

  const handleToggleMinimize = () => {
    setIsMinimize(!isMinimize);
    if (isMinimize) localStorage.removeItem(isMinimizeLocalKey);
    else localStorage.setItem(isMinimizeLocalKey, 1);
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
    <div className={classes.dashboardLayout}>
      <div className={`${classes.sidebar} ${isMinimize ? classes.minimize : ""}`}>
        <div className={classes.logo}>
          <img src="/icon-512x512.png" alt="logo" />
          <h3>Nominote</h3>
        </div>
        <div className={classes.nav}>
          {menuItems.map((item, index) =>
            item.link === "@divider" ? (
              <div key={index} className={classes.divider}>
                <small>{item.title}</small>
              </div>
            ) : (
              <Link
                key={index}
                to={item.link}
                title={isMinimize ? item.title : ""}
                className={`${item.link === location.pathname ? classes.active : ""}`}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ),
          )}
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
  );
};

export default memo(DashboardLayout);
