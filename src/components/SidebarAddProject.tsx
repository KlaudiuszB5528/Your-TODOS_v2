import { useState, useRef, useContext } from "react";
import { TodosContext } from "../context/todos-context";

export const SidebarAddProject: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInputInvalid, setIsInputInvalid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const { addProject, projects } = useContext(TodosContext);

  const handleAddProject = () => {
    if (inputRef.current!.value.trim() === "") {
      if (isInputInvalid) {
        setErrorMsg(() => "The name cannot be empty");
        return;
      }
      setErrorMsg(() => "The name cannot be empty");
      setIsInputInvalid((currentStatus) => !currentStatus);
      return;
    }
    if (projects.includes(inputRef.current!.value)) {
      if (isInputInvalid) {
        setErrorMsg(() => "Project already exists");
        return;
      }
      setErrorMsg(() => "Project already exists");
      setIsInputInvalid((currentStatus) => !currentStatus);
      return;
    } else {
      addProject(inputRef.current!.value);
      setIsOpen((currentStatus) => !currentStatus);
    }
  };

  const handleCancel = () => {
    setIsOpen((currentStatus) => !currentStatus);
    setIsInputInvalid(() => false);
  };

  const toggleOpen: () => void = () => {
    setIsInputInvalid(() => false);
    setIsOpen((currentStatus) => !currentStatus);
    setTimeout(() => {
      const input = inputRef.current;
      if (input) input.focus();
    }, 300);
  };

  const addProjectBtn = (
    <button onClick={toggleOpen} className="sidebar__add-project-btn">
      Add project
    </button>
  );

  const addProjectInput = (
    <>
      {isInputInvalid && <p className="sidebar__error">{errorMsg}</p>}
      <input
        ref={inputRef}
        type="text"
        maxLength={16}
        className="sidebar__add-project-input"
        placeholder="Project name"
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddProject();
          if (e.key === "Escape") handleCancel();
        }}
      />
      <button className="confirm" onClick={handleAddProject}>
        Add
      </button>
      <button className="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );

  return (
    <div className="sidebar__addProject_container">
      {isOpen ? addProjectInput : addProjectBtn}
    </div>
  );
};
