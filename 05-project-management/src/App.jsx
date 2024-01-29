import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectIndex: undefined,
    projects: [],
    tasks: []
  });

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectIndex: undefined,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectIndex: null,
      };
    });
  }

  function handlSelectProject(index) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectIndex: index,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        projects: [...prevState.projects, newProject],
        selectedProjectIndex: undefined
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      const updatedProjects = [...prevState.projects];
  
      if (prevState.selectedProjectIndex !== undefined) {
        updatedProjects.splice(prevState.selectedProjectIndex, 1);
      }
  
      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectIndex: undefined
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectIndex,
        id: Math.random()
      };

      if (prevState.tasks == undefined) {
        return {
          ...prevState,
          tasks: [newTask]
        }
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }
  
  function handleDeleteTask(index) {
    setProjectsState(prevState => {
      if (!prevState.tasks || prevState.tasks.length === 0) {
        return prevState;
      }
  
      const updatedTasks = prevState.tasks.filter((_, idx) => idx !== index);
  
      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  const selectedProject = projectsState.projects[projectsState.selectedProjectIndex]

  let content = 
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject}
      tasks={projectsState.tasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />;

  if (projectsState.selectedProjectIndex === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectIndex === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar 
          onStartAddProject={handleStartAddProject}
          onSelectProject={handlSelectProject}
          projects={projectsState.projects}
        />
        {content}
      </main>
    </>
  );
}