import { Todo } from "../context/todos-context";
import { TodoCard } from "./TodoCard";

interface Props {
  list: Todo[];
  title: string;
  info: string;
}

export const DisplayInbox: React.FC<Props> = (props) => {
  return (
    <div className="todos-page">
      <h2 className="todos-page__project-title">{props.title}</h2>
      <div className="todos-page__todos-list">
        {props.list.map((todo, index) => (
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
      {!props.list.length && <p className="no-todos-info">{props.info}</p>}
    </div>
  );
};
