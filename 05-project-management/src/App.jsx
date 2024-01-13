import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    <NoProjectSelected onStartAddProject={handleAddProject}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar onStartAddProject={handleAddProject}/>
        {content}
      </main>
    </>
  );
}