import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Inbox } from "../pages/Inbox";
import { Todos } from "../pages/Todos";

export const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <Routes>
        <Route path="/Your-Todos_v2" element={<Home />}></Route>
        <Route path="/Your-Todos_v2/inbox" element={<Inbox />}></Route>
        <Route path="/Your-Todos_v2/todays" element={<Inbox />}></Route>
        <Route path="/Your-Todos_v2tomorrows" element={<Inbox />}></Route>
        <Route path="/Your-Todos_v2/todos/:project" element={<Todos />} />
      </Routes>
    </div>
  );
};
