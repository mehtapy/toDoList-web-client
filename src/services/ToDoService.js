import axios from "axios";

const getToDoListUrl = "http://localhost:8081/api/todos/getall";
const addToDoItemUrl = "http://localhost:8081/api/todos/add";
const deleteToDoItemUrl = "http://localhost:8081/api/todos/delete";



export default class ToDoService{
     getToDoList(){
         return axios.get(getToDoListUrl)
     }

     deleteToDoItem(toDo){
        return axios.delete(deleteToDoItemUrl,{data:{id: toDo.id}})
     }

     addToDoItem(newToDo){
        return axios.post(addToDoItemUrl,newToDo)
     }


     getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+ productName)
    }
}
