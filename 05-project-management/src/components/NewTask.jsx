import { useState } from "react"

export default function NewTask({ onAdd, onDelete }) {
    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        onAdd(enteredTask)
        setEnteredTask('')
    }

    return <div className="flex items-center gap-4">
        <input 
            type="text" 
            className="w-64 px-2 py-1 rounded-md bg-stone-200"
            onChange={handleChange}
            value={enteredTask}
        />
        <button 
            className="bg-stone-200 hover:bg-stone-300 text-stone-600 hover:text-stone-950 p-2 rounded-md"
            onClick={handleClick}
        >Save</button>
    </div>
}