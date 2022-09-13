import { Route, Routes } from "react-router-dom";
import DescriptionPage from "./components/pages/DescriptionPage/DescriptionPage";
import HomePage from "./components/pages/HomePage/HomePage";
import NavBar from "./components/UI/organisms/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar role="admin" />
      <Routes>
        <Route path="/movie/:id" element={<DescriptionPage />}></Route>
        <Route path="/" element={<HomePage role="admin" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
