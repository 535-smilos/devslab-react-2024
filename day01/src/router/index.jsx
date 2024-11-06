import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { AboutUs } from "../pages/about-us/About";
import { Character } from "../pages/character/Single";
import { Contact } from "../pages/contact/Contact";
import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/notfound/NotFound";
import { LoginPage } from "../pages/auth/login/login";
import { PublicRoute } from "./routes/public";
import { Profile } from "../pages/profile/Profile";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          children: [
            { index: true, element: <Contact /> },
            { path: "us", element: <h1>Contact us</h1> },
          ],
        },
        {
          path: "/characters/:id",
          element: <Character />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    { path: "/login", element: <PublicRoute element={<LoginPage />} /> },
  ]);

  return <RouterProvider router={router} />;
};
