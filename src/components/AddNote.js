import React, { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ToDoService from "../services/ToDoService";

function AddNote({ toDos, setToDos }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    
    let service = new ToDoService();
    
    const newToDo = {content}
    e.preventDefault();
    service.addToDoItem(newToDo).then().catch();
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="Add New To Do"
            variant="outlined"
            sx={{
              fill: "white",
              width: 400,
              boxShadow: 2,
            }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default AddNote;
