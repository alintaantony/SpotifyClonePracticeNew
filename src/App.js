import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Registration from "./Components/UserAccess/Registration";
import Login from "./Components/UserAccess/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact>
          <Homepage/>
        </Route>
        <Route path="/Login" exact>
          <Login />
        </Route>
        <Route path="/Registration" component={Registration} exact>
          <Registration />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
