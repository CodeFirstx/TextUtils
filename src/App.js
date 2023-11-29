import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About.js";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white"; // by using this we can change text color
      showAlert("Dark mode has been applied", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white ";
      document.body.style.color = "black";
      showAlert("Light mode has been applied", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          about="About US"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          {/* <Routes>
            <Route */}
              {/* exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze"
                  showAlert={showAlert}
                />
              {/* } */}
            {/* ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
