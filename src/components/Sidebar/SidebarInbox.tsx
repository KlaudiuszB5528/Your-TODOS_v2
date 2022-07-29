import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TodosContext } from "../../context/todos-context";

export const SidebarInbox: React.FC = () => {
  const { todos } = useContext(TodosContext);
  const [inboxCount, setInboxCount] = useState<number>(0);
  const [todaysCount, setTodaysCount] = useState<number>(0);
  const [TomorrowsCount, setTomorrowsCount] = useState<number>(0);

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

  useEffect(() => {
    setInboxCount((currentNumber) => (currentNumber = todos.length));
    setTodaysCount((currentNumber) => (currentNumber = filteredTodays.length));
    setTomorrowsCount(
      (currentNumber) => (currentNumber = filteredTomorrows.length)
    );
  }, [todos]);

  return (
    <nav className="sidebar__inbox">
      <ul className="sidebar__inbox_ul">
        <li className="sidebar__inbox_li">
          <NavLink
            to="/inbox"
            className={({ isActive }) => (isActive ? "navlink_active" : "")}
          >
            <div>
              <i className="fa-solid fa-inbox"></i>Inbox
            </div>
            <span>{inboxCount}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/todays"
            className={({ isActive }) => (isActive ? "navlink_active" : "")}
          >
            <div>
              <i className="fa-solid fa-calendar-day"></i>Today's tasks
            </div>
            <span>{todaysCount}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tomorrows"
            className={({ isActive }) => (isActive ? "navlink_active" : "")}
          >
            <div>
              <i className="fa-solid fa-calendar-week"></i>Tomorrow's tasks
            </div>
            <span>{TomorrowsCount}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
