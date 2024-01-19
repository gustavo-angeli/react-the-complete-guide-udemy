import Button from './Button'

export default function SideBar({ onStartAddProject, projects, onSelectProject, selectedProject }) {
    return <>
        <aside className="w-1/3 px-8 py-16 bg-slate-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
            <Button onClick={onStartAddProject}>+ Add project</Button>
            <ul className='mt-8'>
                {projects.map((project, index) => {
                    let cssClass = "w-full text-left px-2 py-1 rounded my-1 hover:text-stone-200 hover:bg-stone-800";

                    if (project.id === selectedProject) {
                        cssClass += " bg-stone-800 text-stone-200";
                    } else {
                        cssClass += " text-stone-400";
                    }

                    return (
                        <li key={index}>
                            <button
                                onClick={() => onSelectProject(index)} 
                                className={cssClass}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    </>
}