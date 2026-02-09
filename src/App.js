import "./App.css";
import { Hello } from "./Component/Functional_component";
import Hi from "./Component/Class_component";
import Wellcome from "./Component/jsx";
import FullName from "./Component/props";
import Subscribe from "./Component/state";
import Event_handle from "./Component/Eventon function";
import EventOnClasses from "./Component/Eventon classes";
import Event_binding from "./Component/Event_binding";
import Conditionalrender from "./Component/conditionalrender";
import Programing_list from "./Component/Liste";
import Stylee1 from "./Component/style";
import Inline from "./Component/inline";
import "./Appstyle.css";
import Styles from "./Appstyle.module.css";
import Form from "./Component/Form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UseStateConter from "./Hooks/Usestate";
import Usestatecounter2 from "./Hooks/Usestatecounter2";
import UseStateWithObject from "./Hooks/UseStateWithObject";
import UseEffectHook from "./Hooks/UseEffectHook";
import Featching from "./Hooks/Featching";
import TodoList from "./Component/Todolist";

function App() {
  return (
    <div className="App">
      <TodoList />
      <Featching />
      <UseEffectHook />
      <UseStateWithObject />
      <Usestatecounter2 />
      <UseStateConter />
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About Us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1> PAGES NOT FOUND</h1>} />
        </Routes>
      </Router>
      <h1 className="Regularcss">Regular css</h1>
      <h1 className={Styles.modulecss}>CSS module style</h1>
      <Hello />
      <Form />
      <Hi />
      <Wellcome />
      <FullName name="aymanot" age="78" />
      <p>This is react props tetourial </p>
      <FullName name="tsion" age="90" />
      <button>Click Here!</button>
      <FullName name="mariyamawit" age="67" />
      <Subscribe />
      <Event_handle />
      <EventOnClasses />
      <Event_binding />
      <Conditionalrender />
      <Programing_list />
      <Stylee1 />
      <Inline />
    </div>
  );
}

export default App;
