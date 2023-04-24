import Book from "../pages/Book/index";
import Error from "../pages/Error";
import HomeLayout from "../pages/Home/homeLayout";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
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
