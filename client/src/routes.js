import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./components/Signup";
import App from "./App";
import Todos from "./components/Todos";
import Login from "./components/Login";
import Analytic from "./components/Analytic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Todos />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="/analytic" element={<Analytic />} />
    </Route>
  )
);

export default router;
