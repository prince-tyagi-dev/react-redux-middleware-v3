import { Routes, Route, BrowserRouter } from "react-router-dom";
import StudentsCounter from "./components/StudentsCounter";
import SimpleCounter from "./components/SimpleCounter";
import Home from "./components/Home";
import "./styles.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/students-counter">Students Counter</a>
        </li>
        <li>
          <a href="/simple-counter">Simple Counter</a>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/students-counter" element={<StudentsCounter />} />
          <Route path="/simple-counter" element={<SimpleCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
