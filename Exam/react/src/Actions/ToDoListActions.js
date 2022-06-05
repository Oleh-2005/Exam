import ToDoListReducer from "../Reducers/ToDoListReducer"

export const Remove = (id) => {
    return{
        type: "REMOVE",
        id: id
    }
}
export const NewToDo = (newToDo) => {
    return{
        type: "NEWTODO",
        todo: newToDo
        
    }
}
