import ToDoItem from "./ToDoItem";
import todos from "./todos.json";
const ToDoList = () => {
 return(
   <>
     <h3>ToDo List</h3>
     <ul className="list-group">
       {
         todos.map(todo => {
           return(<ToDoItem todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default ToDoList;