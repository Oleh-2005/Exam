// import components
import ToDoItem from "./ToDoItem/ToDoItem";
import React from "react";
import { connect } from "react-redux";

const ToDoList = ({ToDoListArray}) => {
  const todo = ToDoListArray.map((item) => {
    return (
      <ToDoItem
        key={item.Id}
        {...item} 
      />
    );
  });
  return (
    <div className="container">
      <div className="col-md-12 bootstrap snippets bootdeys">
        <div className="x_panel">
          <div className="x_content">
            <div className="row">{todo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (item) => {
  const {ToDoListReducer} =item;
  const {ToDoListArray} = ToDoListReducer;
  return {ToDoListArray}
}

const mapDispatchToProps = {
 
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
