import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Inbox } from "../pages/Inbox";
import { Todos } from "../pages/Todos";

export const MainSection: React.FC = () => {
  return (
    <div className="main-section">
      <Routes>
        <Route path="/Your-TODOS_v2" element={<Home />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/todays" element={<Inbox />}></Route>
        <Route path="/tomorrows" element={<Inbox />}></Route>
        <Route path="/todos/:project" element={<Todos />} />
      </Routes>
    </div>
  );
};
