import { useState } from "react";
import TodoItem from "./toDoItem";
export default function TodoBox() {
    //state
    const [input, setInput] = useState("");
    const [todos,setTodos] = useState([]);


    const handleDelete = (id)=>{
        setTodos(todos.filter((todo) =>{
            return todo.id !== id
        }))
    }
    const handleToggle = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    )
  );
};


  return <div className="bg-white p-6 rounded shadow w-full max-w-md p-5">
    <h1 className="text-2xl font-bold mb-4">Todo List</h1>
    <form 
    className="mb-4 flex gap-2"
    onSubmit={(e)=>{
        e.preventDefault();
        console.log(input)
        if(input.trim()==="") return alert("Please enter a valid todo item")
        const newTodo ={
            id: Date.now(),
            text: input.trim(),
            status: false
        }
        setTodos([...todos,newTodo]);
        console.log(newTodo);
        
        setInput("");
    }}>
        <input 
        className="w-80 border-1 rounded p-2" 
        placeholder="Add a todo..."
        type="text"
        value={input}
        onChange={(e)=>{
            setInput(e.target.value)
        }}></input>
        <button className="w-20 bg-blue-500 rounded hover:opacity-80 duration-300">Add</button>
    </form>
    <ul>
        {todos.map((todo)=>(
            <TodoItem key={todo.id} 
            todo={todo} 
            onDelete ={handleDelete}
            onToggle ={handleToggle}
             />
        ))}
    </ul>
  </div>;
}
