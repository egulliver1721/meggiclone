import "./App.css";
import heroImage from "./meggicover.jpg";
import Header from "./header.js";

function App() {
  return (
    <div className="App">
      <section className="center banner">
        <p>Free shipping within Australia</p>
      </section>
      <section className="section-width-standard">
        <nav className="navigation">
          <h1>MEGGI</h1>
          <h4>Shop Nappy Bag Tags</h4>
          <p>🛒</p>
        </nav>
      </section>
      <div className="heroContainer">
        <Header heroImage={heroImage} />
      </div>
    </div>
  );
}

export default App;
