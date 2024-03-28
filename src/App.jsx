import { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/Layouts/BaseLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import HomePage from "./pages/LoginPage";
import CalendarPage from "./pages/CalendarPage";
import NoteBookPage from "./pages/NoteBookPage";
import TaskBoardPage from "./pages/TaskBoardPage";
import TaskKanbanPage from "./pages/TaskKanbanPage";
import StringHelperPage from "./pages/StringHelperPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks/board" element={<TaskBoardPage />} />
          <Route path="tasks/kanban" element={<TaskKanbanPage />} />
          <Route path="notebook" element={<NoteBookPage />} />
          <Route path="str/helpers" element={<StringHelperPage />} />
        </Route>
      </Fragment>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
