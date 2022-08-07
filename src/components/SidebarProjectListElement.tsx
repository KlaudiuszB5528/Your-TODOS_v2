import React, { useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { TodosContext } from "../context/todos-context";

interface Props {
  index: number;
  project: string;
}

export const SidebarProjectListElement: React.FC<Props> = (props) => {
  const { todos, removeProject, updateProjects, deleteTodo } =
    useContext(TodosContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDelete: React.MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement;
    const name = target.parentElement?.previousElementSibling?.textContent;
    if (!name) return;
    removeProject(name);
    todos.map((todo) => todo.project === name && deleteTodo(todo.id));
  };

  const handleEdit: React.MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement;
    const name = target.parentElement?.previousElementSibling?.textContent;
    const input = target.parentElement?.previousElementSibling
      ?.previousElementSibling as HTMLInputElement;
    if (!name) return;
    input.dataset.open = "true";
    input.focus();
  };

  const handleEditConfirm: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      const newName = e.target.value;
      const oldName = props.project;
      updateProjects(oldName, newName);
      e.target.dataset.open = "false";
      todos.map((todo) =>
        todo.project === oldName ? (todo.project = newName) : todo
      );
      if (location.pathname === `/todos/${oldName}`)
        navigate(`/Your-TODOS_v2/todos/${newName}`, { replace: true });
    }
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.nextElementSibling!.textContent as string;
    e.target.dataset.open = "false";
    e.target.value = value;
  };

  return (
    <li key={props.index}>
      <input
        type="text"
        maxLength={16}
        defaultValue={props.project}
        className="sidebar__edit-project-input"
        data-open="false"
        onKeyDown={handleEditConfirm}
        onBlur={handleBlur}
      />
      <NavLink
        to={`/Your-TODOS_v2/todos/${props.project}`}
        className={({ isActive }): string =>
          isActive ? "projects_nav_active" : ""
        }
      >
        {props.project}
      </NavLink>
      <div className="options">
        <i className="fa-solid fa-pencil-alt" onClick={handleEdit}></i>
        <i className="fa-solid fa-trash-alt" onClick={handleDelete}></i>
      </div>
    </li>
  );
};
