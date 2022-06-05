import { v4 } from "uuid";
const initialState = {
    ToDoListArray: [
        {
            Id: v4(),
            Name: "Washing",
        },
        {
            Id: v4(),
            Name: "Drawing",
        },
        {
            Id: v4(),
            Name: "Reading",
        },
        {
            Id: v4(),
            Name: "Shopping",
        },
    ]
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE":
            {
                return {
                    ToDoListArray: state.ToDoListArray.filter((item) => item.Id != action.id)
                };
            }
        case "NEWTODO":
            {
               state.ToDoListArray.push(action.todo);
               return {
                ToDoListArray: state.ToDoListArray
                };
            }
        default:
            return state;
    }
}

export default ToDoListReducer;