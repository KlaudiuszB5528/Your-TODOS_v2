import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
  children: React.ReactNode;
}

export interface Todo {
  id: string;
  project: string;
  text: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

interface Context {
  projects: string[];
  todos: Todo[];
  addProject: (name: string) => void;
  removeProject: (name: string) => void;
  updateProjects: (name: string, newName: string) => void;
  addTodo: (
    project: string,
    text: string,
    description: string,
    date: Date,
    id: string
  ) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, completed: boolean) => void;
  completeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<Context>({
  projects: [],
  todos: [],
  addProject: () => {},
  removeProject: () => {},
  updateProjects: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  completeTodo: () => {},
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [projects, setProjects] = useLocalStorage<string[]>("projects", []);
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addProject = (name: string) => {
    setProjects((currentProjects) => [...currentProjects, name]);
  };

  const removeProject = (name: string) => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project !== name)
    );
  };

  const updateProjects = (name: string, newName: string) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) => (project === name ? newName : project))
    );
  };

  const addTodo = (
    project: string,
    text: string,
    description: string,
    dueDate: Date,
    id: string
  ) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id,
        project,
        text,
        description,
        completed: false,
        dueDate,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const completeTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const providerValue = {
    projects,
    todos,
    addProject,
    removeProject,
    updateProjects,
    addTodo,
    deleteTodo,
    updateTodo,
    completeTodo,
  };

  return (
    <TodosContext.Provider value={providerValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
