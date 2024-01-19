export default function NewTask() {
    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-md bg-stone-200"/>
        <button className="bg-stone-200 hover:bg-stone-300 text-stone-600 hover:text-stone-950 p-2 rounded-md">Save</button>
    </div>
}