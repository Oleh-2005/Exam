import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Hader";
import ToDoList from "./Components/ToDoList/ToDoList";

import AddToDo from "./Components/AddToDo/AddToDo";

import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <ToDoList />
          } />
          <Route path="/new-todo" element={<AddToDo onAddContact />}
          />
        </Routes>
      </Router>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));