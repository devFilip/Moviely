import HomePage from "./components/pages/HomePage/HomePage";
import NavBar from "./components/UI/organisms/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar role="admin" />
      <HomePage />
    </div>
  );
}

export default App;
