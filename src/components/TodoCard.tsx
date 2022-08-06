import { TodosContext } from "../context/todos-context";
import { useContext } from "react";

interface TodoCardProps {
  title: string | undefined;
  description: string;
  dueDate: Date;
  id: string;
  completed: boolean;
}

export const TodoCard: React.FC<TodoCardProps> = (props) => {
  const { deleteTodo, updateTodo } = useContext(TodosContext);
  const convertDate = (date: Date): string => {
    const year = `${date.getFullYear()}`;
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const isCompleted: string = props.completed ? "completed" : "";

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const checked = e.currentTarget.checked;
    updateTodo(props.id, checked);
  };

  return (
    <div className="card" data-index={props.id}>
      <div className="card__side card__side--front">
        <div className="mobile-prompt">Click for more details.</div>
        <div className={`card__title ${isCompleted}`}>{props.title}</div>
        <div className={`dueDate ${isCompleted}`}>
          Due Date: {convertDate(new Date(props.dueDate))}
        </div>
      </div>
      <div className="card__side card__side--back">
        <input
          type="checkbox"
          name="todo-check"
          id="todo-check"
          checked={props.completed}
          onChange={handleCheckboxChange}
        />
        <button
          className="delete-todo-btn"
          onClick={() => deleteTodo(props.id)}
        >
          <i className="fa-solid fa-trash-alt" />
        </button>
        <div className={`card__description ${isCompleted}`}>
          {props.description}
        </div>
      </div>
    </div>
  );
};
