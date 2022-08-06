import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Sidebar } from "./components/Sidebar";
import { TodosContextProvider } from "./context/todos-context";

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <Header />
      <Sidebar />
      <MainSection />
      <Footer />
    </TodosContextProvider>
  );
};

export default App;
