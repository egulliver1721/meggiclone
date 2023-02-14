import "./App.css";
import heroImage from "./meggicover.jpg";
import Header from "./header.js";
import Navigation from "./navigation.js";

function App() {
  return (
    <div className="App">
      <section className="center banner">
        <p>Free shipping within Australia</p>
      </section>
      <section className="section-width-standard">
        <Navigation />
      </section>
      <div className="heroContainer">
        <Header heroImage={heroImage} />
      </div>
    </div>
  );
}

export default App;
