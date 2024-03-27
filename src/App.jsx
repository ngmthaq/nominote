import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import BaseLayout from "./components/Layouts/BaseLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
