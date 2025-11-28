export default function TodoItem({todo,onDelete,onToggle}) {

    return <div>
        <li className={`flex flex-row justify-between items-center border-b-1 p-2`}  >
            <span>{todo.text}</span>
            <span>{todo.status?"Done":"Not Done"}</span>
            <div className="">
                <button className={`bg-green-500 rounded hover:opacity-80 duration-300 m-2 p-1 ${todo.status?"disabled:bg-gray-400 disabled:cursor-not-allowed":""}`}
                        onClick={()=> onToggle(todo.id)}
                        disabled={todo.status}>
                        Done
                </button>
                <button className="bg-red-500 rounded hover:opacity-80 duration-300 m-2 p-1"
                        onClick={() => onDelete(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    </div>
}