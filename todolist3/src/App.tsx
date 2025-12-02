import { use, useState } from 'react'

import './App.css'

function App() {


  const [todo, setTodo] = useState([])
  const [input,setInput] = useState('')

  const handleDelete = (id)=>{
    return setTodo(todo.filter((item) => item.key !== id))
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-teal-200'>
        <div className='container max-h-[80%] - w-[40%] bg-white rounded-xl shadow-2xl flex flex-col items-center !p-5'>
          <h1 className="text-3xl font-bold text-cyan-600">TO DO LIST</h1>
          <form className='w-full flex flex-row justify-center items-center gap-2 !mt-5'
                onSubmit={(e)=>{
                  e.preventDefault();
                  console.log(input);

                 const newTodo = {
                  key: Math.random(),
                  text: input,
                  status: false,
                 }

                  setTodo([...todo, newTodo]);
                  console.log(newTodo);
                  
                  setInput('');
                  
                }}>
            <input className='w-[70%] h-12 border rounded-2xl shadow  !p-5'
                    placeholder='input here'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}></input>
            <button className='w-[10%] h-12 bg-amber-200 rounded-xl hover:bg-amber-300'>Add</button>
          </form>
          <div className='flex flex-col justify-center items-center w-[80%] '>
            {todo.map((item) =>{
              return (
              <li key={item.key} className={`border-b-1 list-none w-[100%] bg-amber-200 rounded-xl !mt-5 !p-2 flex justify-between items-center 
                  ${item.status ? 'bg-gray-200' : ''}`}>
              <input  type='checkbox'
                      className={`w-6 h-6 mr-2  ${item.status ? 'pointer-events-none' : 'bg-white'}`}
                      checked = {item.status}
                      onChange ={(e)=>{
                        const newTodo = todo.map((todoItem) => {
                          if (todoItem.key === item.key) {
                            return {
                              ...todoItem,
                              status: e.target.checked,
                            };
                          }
                          return todoItem;
                        });
                        console.log(newTodo);
                        
                        setTodo(newTodo);
                      }}
                      />
              <span className='text-xl font-medium !p-5'>{item.text}</span>  
              <button className='w-12 h-12 bg-red-300 rounded-md hover:bg-red-400'
                      onClick={() => handleDelete(item.key)}>X</button>
              </li>
            )
             } )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
