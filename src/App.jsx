import { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navigate from "./components/Common/Navigate";
import BaseLayout from "./components/Layouts/BaseLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import HomePage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import NoteBookPage from "./pages/NoteBookPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import RegexPage from "./pages/RegexPage";
import StringHelperPage from "./pages/StringHelperPage";
import GoogleSearchPage from "./pages/GoogleSearchPage";
import SeoPage from "./pages/SeoPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to={"/dashboard/search"} replace />} />
          <Route path="search" element={<GoogleSearchPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks" element={<TaskBoardPage />} />
          <Route path="notebook" element={<NoteBookPage />} />
          <Route path="str" element={<StringHelperPage />} />
          <Route path="regex" element={<RegexPage />} />
          <Route path="seo" element={<SeoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Fragment>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
