import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/auth";
import Shop from "./pages/Shop";
import Main from "./Layouts/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>

      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
export default App;
