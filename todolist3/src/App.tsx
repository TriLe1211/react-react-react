import { useState } from "react";

import "./App.css";

type TodoItem = {
  key: number;
  text: string;
  status: boolean;
};

function App() {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [filtered, setFilter] = useState<TodoItem[]>([]);
  const [isFilter, setIsFilter] = useState<string>("All");

  const [input, setInput] = useState<string>("");

  const [editText, setEditText] = useState<string>("");
  const [isEdit, setIsEdit] = useState<number | null>(null);

  const filter = ["All", "Active", "Completed"];

  const handleDelete = (id: number) => {
    setTodo(todo.filter((item) => item.key !== id));
    setFilter(filtered.filter((item) => item.key !== id));
  };

  const handleAdd = (input: string) => {
    if (input.trim() === "") return alert("Please enter a valid todo item.");

    setTodo((pre) => [...pre, { key: Date.now(), text: input, status: false }]);

    if (isFilter === "Completed") {
      setIsFilter("All");
      setFilter([...todo, { key: Date.now(), text: input, status: false }]);
      setInput("");
    } else {
      setFilter([...todo, { key: Date.now(), text: input, status: false }]);
      setInput("");
    }

    
    
  };

  const handleChecked = (key: number) => {
    const newTodo = todo.map((item) =>
      item.key === key ? { ...item, status: !item.status } : item
    );
    setTodo(newTodo);

    if (isFilter === "Active") {
      setFilter(newTodo.filter((item) => item.status === false));
    } else if (isFilter === "Completed") {
      setFilter(newTodo.filter((item) => item.status === true));
    } else {
      setFilter(newTodo);
    }
  };

  const handleEdit = (key: number) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, text: editText } : item
      )
    );
    setFilter((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, text: editText } : item
      )
    );

    setEditText("");
    setIsEdit(null);
  };

  const handleFilter = (status: string) => {

    if (status === "Active") {
      setFilter(todo.filter((item) => item.status === false));
      setIsFilter(status);
    } else if (status === "Completed") {
      setFilter(todo.filter((item) => item.status === true));
      setIsFilter(status);
    } else {
      setFilter(todo);
      setIsFilter(status);
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-teal-200">
        <div className="container max-h-[80%] w-[40%] bg-white rounded-xl shadow-2xl flex flex-col items-center !p-5 ">
          <h1 className="text-3xl font-bold text-cyan-600">TO DO LIST</h1>
          <div className="w-full flex flex-row justify-center items-center gap-2 !mt-5 flex-wrap">
            <input
              className="w-[70%] h-12 border rounded-2xl shadow  !p-5"
              placeholder="input here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="w-[10%] h-12 bg-amber-200 rounded-xl hover:bg-amber-300"
              onClick={() => handleAdd(input)}
            >
              Add
            </button>
          </div>
          <div className="w-full flex flex-row justify-center items-center !mt-5 gap-2 flex-wrap">
            {filter.map((item: string) => (
              <button
                className=" max-w-full w-24 h-12 bg-lime-200 rounded-xl hover:bg-lime-300"
                onClick={() => {
                  handleFilter(item);
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <div
            className="flex flex-col justify-start items-center 
                w-[80%] h-[60vh] overflow-y-auto pr-2 "
          >
            <ul className=" w-full flex flex-col justify-start items-center gap-4">
              {filtered.map((item) => {
                return (
                  <li
                    key={item.key}
                    className={` overflow-x-auto border-b-1 list-none w-[100%] bg-amber-200 rounded-xl !mt-5 !p-2 gap-2 flex justify-between items-center 
                  ${item.status ? "bg-gray-200" : ""}`}
                  >
                    <div className="flex flex-row justify-between items-center gap-5">
                      <input
                        type="checkbox"
                        className={`w-6 h-6 mr-2  ${
                          item.status ? "pointer-events-none" : "bg-white"
                        }`}
                        checked={item.status}
                        onChange={() => handleChecked(item.key)}
                      />

                      {isEdit === item.key ? (
                        <input
                          className="border rounded-xl bg-white !p-2 w-[80%]"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      ) : (
                        <span className="text-xl font-medium px-3 py-1 text-balance whitespace-normal ">
                          {item.text}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-row justify-between items-center gap-2">
                      {isEdit === item.key ? (
                        <button
                          className="w-16 h-12 bg-green-400 rounded-md hover:bg-green-600 font-bold text-white italic"
                          onClick={() => handleEdit(item.key)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="w-16 h-12 bg-blue-400 rounded-md hover:bg-blue-600 font-bold text-white italic"
                          onClick={() => {
                            setEditText(item.text);
                            setIsEdit(item.key);
                          }}
                        >
                          Edit
                        </button>
                      )}

                      <button
                        className="w-16 h-12 bg-red-400 rounded-md hover:bg-red-500 font-bold text-white italic"
                        onClick={() => handleDelete(item.key)}
                      >
                        X
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
