import ReactStars from "react-rating-stars-component";
import "./ToDoItem.css";
import React from "react";
import { connect } from "react-redux";
import {Remove} from '../../../Actions/ToDoListActions'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.Props = props;
  }

  render() {
    return (
      <div className="col-md-4 col-sm-4 col-xs-12 animated fadeInDown">
      <div className="well profile_view">
        <div className="col-sm-12">          
          <div className="center col-xs-10">
            <h1>{this.Props.Name}</h1>
          </div>          
        </div>
        <div className="col-xs-12 bottom text-center">          
          <div className="col-xs-12 col-sm-6 emphasis">
            <button type="button" className="btn btn-warning btn-xs" onClick={()=>this.Props.Remove(this.Props.Id)}>X
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (item) => {
  return item;
}

const mapDispatchToProps = {
  Remove
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
