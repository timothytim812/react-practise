import { useRoutes } from "react-router-dom";
import Practice from "./pages/practice";
import NotFound from "./pages/NotFound/NotFound";
import Cat from "./pages/cat";
import FormWeb from "./pages/Form";
// import Film from "./pages/MoviesData";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Practice />,
    },
    {
      path: "/cat",
      element: <Cat />,
    },
    {
      path: "/form",
      element: <FormWeb />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
