import { Route, Routes } from "react-router-dom";
import DescriptionPage from "./components/pages/DescriptionPage/DescriptionPage";
import FormPage from "./components/pages/FormPage/FormPage";
import HomePage from "./components/pages/HomePage/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import PendingCommentsPage from "./components/pages/PendingCommentsPage/PendingCommentsPage";
import PendingUsersPage from "./components/pages/PendingUsersPage/PendingUsersPage";
import NavBar from "./components/UI/organisms/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar role="admin" />
      <Routes>
        <Route path="/movieForm/:id" element={<FormPage />}></Route>
        <Route path="/pendingUsers" element={<PendingUsersPage />}></Route>
        <Route
          path="/pendingComments"
          element={<PendingCommentsPage />}
        ></Route>
        <Route path="/movie/:id" element={<DescriptionPage />}></Route>
        <Route path="/" element={<HomePage role="admin" />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
