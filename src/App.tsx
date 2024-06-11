import {} from "react";
import "./App.css";
import Form from "./Form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        . Coded by <a href="#">Shawn Ji</a>.
      </div>

      <ToastContainer
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme="colored"
      />
    </div>
  );
}

export default App;
