import { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navigate from "./components/Common/Navigate";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import CalendarPage from "./pages/CalendarPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import RegexPage from "./pages/RegexPage";
import TextConverterPage from "./pages/TextConverterPage";
import KeyboardEventPage from "./pages/KeyboardEventPage";
import GoogleSearchPage from "./pages/GoogleSearchPage";
import SeoPage from "./pages/SeoPage";
import NotFoundPage from "./pages/NotFoundPage";
import RandomTextPage from "./pages/RandomTextPage";
import WordCountPage from "./pages/WordCountPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<Navigate to={"/_/search"} replace />} />
        <Route path="_" element={<DashboardLayout />}>
          <Route path="search" element={<GoogleSearchPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks" element={<TaskBoardPage />} />
          <Route path="text/converter" element={<TextConverterPage />} />
          <Route path="text/random" element={<RandomTextPage />} />
          <Route path="text/count" element={<WordCountPage />} />
          <Route path="keyboard/event" element={<KeyboardEventPage />} />
          <Route path="html/seo" element={<SeoPage />} />
          <Route path="js/regex" element={<RegexPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Fragment>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
