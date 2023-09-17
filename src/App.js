import "./App.css";
import Header from "./components/Header";
import QuizForm from "./components/QuizForm";

function App() {

  return (
    <div className="App">
      <Header title="Quiz" />
      <QuizForm />
    </div>
  );
}

export default App;
