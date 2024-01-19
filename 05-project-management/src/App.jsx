import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectIndex: undefined,
    projects: []
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

  const selectedProject = projectsState.projects[projectsState.selectedProjectIndex]

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

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