import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return <section >
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <NewTask onAdd={onAdd} onDelete={onDelete}/>
        {tasks == undefined || tasks.length === 0  ? <p>This project doesn't have any tasks yet.</p> : 
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task, index) => 
                    <li key={index} className="flex justify-between">
                        <span>{task.text}</span>
                        <button onClick={() => onDelete(index)} className="hover:text-red-500">Clear</button>
                    </li>
                )}
            </ul>
        }
    </section>
}