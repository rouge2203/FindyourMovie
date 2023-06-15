import "./App.css";
import Home from "./components.js/Home";
import Recomendations from "./components.js/Recomendations.js";
import Favorites from "./components.js/Favorites";

function App() {
  return (
    <div>
      <nav></nav>
      <div id="tab_bar"></div>
      <section className="w-full h-full">
        <Home />
        <Recomendations />
        <Favorites />
        <div id="favorites"></div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
