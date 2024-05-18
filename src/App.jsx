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
import UTCDateTimePage from "./pages/UTCDateTimePage";
import Milliseconds2DatePage from "./pages/Milliseconds2DatePage";
import LoremIpsumPage from "./pages/LoremIpsumPage";
import TailwindCssCheatseetPage from "./pages/TailwindCssCheatseetPage";
import BootstrapCheatseetPage from "./pages/BootstrapCheatseetPage";
import MarkdownViewerPage from "./pages/MarkdownViewerPage";
import JsonViewerPage from "./pages/JsonViewerPage";
import KeyboardTestPage from "./pages/KeyboardTestPage";
import AudioTestPage from "./pages/AudioTestPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<Navigate to={"/_/search"} replace />} />
        <Route path="_" element={<DashboardLayout />}>
          <Route path="search" element={<GoogleSearchPage />} />
          <Route path="tasks" element={<TaskBoardPage />} />
          <Route path="date/calendar" element={<CalendarPage />} />
          <Route path="date/utc" element={<UTCDateTimePage />} />
          <Route path="date/milliseconds2date" element={<Milliseconds2DatePage />} />
          <Route path="text/converter" element={<TextConverterPage />} />
          <Route path="text/random" element={<RandomTextPage />} />
          <Route path="text/count" element={<WordCountPage />} />
          <Route path="text/loremipsum" element={<LoremIpsumPage />} />
          <Route path="keyboard/event" element={<KeyboardEventPage />} />
          <Route path="keyboard/test" element={<KeyboardTestPage />} />
          <Route path="html/seo" element={<SeoPage />} />
          <Route path="css/tailwind" element={<TailwindCssCheatseetPage />} />
          <Route path="css/bootstrap" element={<BootstrapCheatseetPage />} />
          <Route path="js/regex" element={<RegexPage />} />
          <Route path="preview/md" element={<MarkdownViewerPage />} />
          <Route path="preview/json" element={<JsonViewerPage />} />
          <Route path="audio/micro/test" element={<AudioTestPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Fragment>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
