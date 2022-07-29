import { useParams } from "react-router-dom";
import { TodosContext } from "../../context/todos-context";
import { TodoCard } from "./TodoCard";
import { useContext, useState } from "react";
import { Modal } from "./Modal";

export const DisplayTodos: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todos, addTodo } = useContext(TodosContext);
  const { project } = useParams();

  const sortedByProject = todos
    .sort((a, b) => {
      if (a.dueDate < b.dueDate) return -1;
      if (a.dueDate > b.dueDate) return 1;
      return 0;
    })
    .filter((todo) => todo.project === project);

  return (
    <div className="todos-page">
      <h2 className="todos-page__project-title">{project}</h2>
      <div className="todos-page__todos-list">
        {sortedByProject.map((todo, index) => (
          <TodoCard
            key={index}
            id={todo.id}
            title={todo.text}
            description={todo.description}
            dueDate={todo.dueDate}
            completed={todo.completed}
          />
        ))}
      </div>
      <button className="add-todo-btn" onClick={() => setIsModalOpen(true)}>
        Add TODO
      </button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(() => false)}
        onSubmit={addTodo}
      />
      {!sortedByProject.length && (
        <p className="no-todos-info">No TODOS to display.</p>
      )}
    </div>
  );
};
