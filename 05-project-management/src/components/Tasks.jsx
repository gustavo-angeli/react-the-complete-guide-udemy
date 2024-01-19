import NewTask from "./NewTask";

export default function Tasks() {
    return <section >
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <NewTask />
        <p>This project doesn't have any tasks yet.</p>
    </section>
}