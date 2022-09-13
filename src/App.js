import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ToDoService from "./services/ToDoService.js";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

import { deleteAlert } from "./services/AlertService";
import AddNote from "./components/AddNote";
import ToDoList from "./components/ToDoList";

function App() {

  //useStates
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    let service = new ToDoService();
    service.getToDoList().then((result) => setToDos(result.data));
  }, [toDos]);

  // const handleDeleteToDo = (id) => {
  //   const deleteId = { id };
  //   let service = new ToDoService();
  //   service.deleteToDoItem(deleteId).then().catch();
  // };


  //Delete function within alert
  const handleDeleteToDo = async (id) => {
    const status = await deleteAlert();
    if (status) {
      const deleteId = {id}
      let service = new ToDoService();
      service.deleteToDoItem(deleteId).then().catch();
    }
  };

  return (
    <div className="App">
      <h1>Todo List +</h1>
      <div className="d-flex p-5 mx-auto justify-content-center">
        <div className="row justify-content-center">
          <AddNote toDos={toDos} setToDos={setToDos} />
        </div>
      </div>
      <ToDoList toDos={toDos} handleDeleteToDo={handleDeleteToDo} />
    </div>
  );
}

export default App;
