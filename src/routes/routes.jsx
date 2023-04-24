import Book from "../pages/Book/index";
import Error from "../pages/error";
import Home from "../pages/Home/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:id",
    element: <Book />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
