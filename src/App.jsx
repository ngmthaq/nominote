import { Fragment } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/Layouts/BaseLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="calendar" element={<TodoListPage />} />
          <Route path="tasks/board" element={<TodoListPage />} />
          <Route path="tasks/kanban" element={<TodoListPage />} />
          <Route path="notebook" element={<TodoListPage />} />
          <Route path="str/helpers" element={<TodoListPage />} />
        </Route>
      </Fragment>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
