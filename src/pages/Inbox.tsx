import { useLocation } from "react-router-dom";
import { DisplayInbox } from "../components/DisplayInbox";
import { TodosContext } from "../context/todos-context";
import { useContext } from "react";

export const Inbox: React.FC = () => {
  const location = useLocation();

  const { todos } = useContext(TodosContext);

  const filteredTodays = todos.filter((todo) => {
    const today = new Date();
    const dueDate = new Date(todo.dueDate);
    return (
      dueDate.getDate() === today.getDate() &&
      dueDate.getMonth() === today.getMonth() &&
      dueDate.getFullYear() === today.getFullYear()
    );
  });

  const filteredTomorrows = todos.filter((todo) => {
    const today = new Date();
    const dueDate = new Date(todo.dueDate);
    return (
      dueDate.getDate() === today.getDate() + 1 &&
      dueDate.getMonth() === today.getMonth() &&
      dueDate.getFullYear() === today.getFullYear()
    );
  });

  return (
    <>
      {location.pathname === "/Your-TODOS_v2/inbox" && (
        <DisplayInbox list={todos} title="Inbox" info={"You have no TODOS."} />
      )}
      {location.pathname === "/Your-TODOS_v2/todays" && (
        <DisplayInbox
          list={filteredTodays}
          title="Today's"
          info={"No TODOS for today. Enjoy Your day!"}
        />
      )}
      {location.pathname === "/Your-TODOS_v2/tomorrows" && (
        <DisplayInbox
          list={filteredTomorrows}
          title="Tomorrow's"
          info="Seems like it's a lazy day tomorrow."
        />
      )}
    </>
  );
};
