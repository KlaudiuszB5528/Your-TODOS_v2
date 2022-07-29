import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { MainSection } from "./components/MainSection/MainSection";
import { Sidebar } from "./components/Sidebar/Sidebar";
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
