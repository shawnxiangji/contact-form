import {} from "react";
import "./App.css";
import Form from "./Form/Form";

function App() {
  return (
    <div className="home flex flex-col justify-center items-center">
      <div className="form-container bg-white w-11/12 lg:w-1/2 rounded-3xl p-8">
        <Form></Form>
      </div>
      <div className="attribution text-indigo-500">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
