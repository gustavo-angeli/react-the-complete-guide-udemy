import Input from "./Input"
import { useRef } from "react"

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const currentTitle = title.current.value;
        const currentDescription = description.current.value;
        const currentDueDate = dueDate.current.value;

        if (currentTitle.trim() !== "" && currentDescription.trim() !== "" && currentDueDate.trim() !== "") {
            onAdd({
                title: currentTitle,
                description: currentDescription,
                dueDate: currentDueDate
            });
        }
    }
    
    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button 
                    className="text-stone-800 hover:text-stone-950 bg-stone-200 hover:bg-stone-300 px-6 py-2 rounded-md"
                    onClick={() => onCancel()}
                >Cancel</button>
            </li>
            <li>
                <button 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}
                >Save</button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} label='Title'/>
            <Input ref={description} label='Description' isTextArea/>
            <Input type="date" ref={dueDate} label='Due Date'/>
        </div>
    </div>
}