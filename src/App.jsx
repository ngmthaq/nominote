import { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navigate from "./components/Common/Navigate";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import CalendarPage from "./pages/CalendarPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import RegexPage from "./pages/RegexPage";
import StringHelperPage from "./pages/StringHelperPage";
import KeyboardHelperPage from "./pages/KeyboardHelperPage";
import GoogleSearchPage from "./pages/GoogleSearchPage";
import SeoPage from "./pages/SeoPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<Navigate to={"/_/search"} replace />} />
        <Route path="_" element={<DashboardLayout />}>
          <Route path="search" element={<GoogleSearchPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks" element={<TaskBoardPage />} />
          <Route path="str" element={<StringHelperPage />} />
          <Route path="keyboard" element={<KeyboardHelperPage />} />
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
