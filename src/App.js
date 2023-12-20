import "./App.css";
import FeedbackForm from "./FeedBackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
