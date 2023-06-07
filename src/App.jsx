import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layouts
import RootLayout from "./layouts/RootLayout";
import AboutLayout from "./layouts/AboutLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Components
import "./index.css";
import DropText from "./components/DropText";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />}>
          <Route path="/more" element={<DropText />} />
        </Route>

        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<About />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
