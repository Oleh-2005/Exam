import React from "react";
import { Navigate } from "react-router-dom";
import { v4 } from "uuid";
import { connect } from "react-redux";
import {NewToDo} from '../../Actions/ToDoListActions'

class AddToDo extends React.Component {

  state = {
    Name: ""
  };

  getName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };


  onSubmit = (event) => {
    event.preventDefault();
    const { Name} =
      this.state;
    const newToDo = {
      Id: v4(),
      Name
    };

    this.props.NewToDo(newToDo);
    this.setState({
      isRedirect: true,
    });
  };

  render() {
    const {isRedirect } = this.state;
    if (isRedirect) {
      return <Navigate to="/" />;
    }    
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.getName}
                  />
                </div>
              </div> 
              <div className="form-group">
                <button type="submit" className="btn btn-success" >
                  Add todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (item) => {
 return item
}

const mapDispatchToProps = {
  NewToDo
}
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
