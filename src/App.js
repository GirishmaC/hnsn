import "./App.css";
import Movie from "./higherOrder/tech";
import MovieReview from "./PureComp/techField";

function App() {
  return (
    <div className="container">
      <div className="tech">
        <h1>HOC</h1>
        <p>
          LoremLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux
           texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser
        </p>
        <Movie id={1} />
      </div>
      <div className="Para1">
        <h1>Pure Component </h1>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie 
          depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser</p>
        <MovieReview />
      </div>
    </div>
  );
}

export default App;