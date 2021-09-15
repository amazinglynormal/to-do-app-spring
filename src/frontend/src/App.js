import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserContext } from "./state/user-context";
import { Navbar } from "./components/Navbar";
import { AddNewToDoList } from "./components/AddNewToDoList";
import { ToDoList } from "./components/ToDoList";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <UserContext.Provider value={{}}>
          <Navbar />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/todolist/:id">
              <ToDoList />
            </Route>
            <Route exact path="/todolist">
              <AddNewToDoList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
