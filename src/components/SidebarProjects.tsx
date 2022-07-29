import React, { useContext } from "react";
import { TodosContext } from "../context/todos-context";
import { SidebarProjectListElement } from "./SidebarProjectListElement";

export const SidebarProjects: React.FC = () => {
  const { projects } = useContext(TodosContext);

  return (
    <div className="sidebar__projects">
      <h3 className="sidebar__projects-title">
        <i className="fa-solid fa-list-ul"></i>
        Projects
      </h3>
      <nav className="sidebar__projects-list">
        <ul>
          {projects.map((project, index) => (
            <SidebarProjectListElement
              key={index}
              project={project}
              index={index}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
