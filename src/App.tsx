import { Routes, Route, Link } from "react-router-dom";
import StudentsCounter from "./components/StudentsCounter";
import SimpleCounter from "./components/SimpleCounter";
import Home from "./components/Home";
import "./styles.css";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/students-counter">Students Counter</Link>
        </li>
        <li>
          <Link to="/simple-counter">Simple Counter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/students-counter" element={<StudentsCounter />} />
        <Route path="/simple-counter" element={<SimpleCounter />} />
      </Routes>
    </div>
  );
};

export default App;
