import React from "react";
import ToDoService from "../services/ToDoService";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ({ handleDeleteToDo, toDos }) {
  return (

    //Print the ToDoList items trough the map function
    <div>
        {toDos.map((toDo)=><div className="d-flex p-5 justify-content-center">
        <div className="list-item">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="check-input"
          />
         <div className="listed-todo">{toDo.content}</div> 
          <div className="button-container">
            <IconButton edge="end" aria-label="comments">
              <DeleteIcon
                fontSize="large"
                onClick={() => handleDeleteToDo(toDo.id)}
              />
            </IconButton>
          </div>
        </div>

      </div>)}
      
    </div>
  );
}
