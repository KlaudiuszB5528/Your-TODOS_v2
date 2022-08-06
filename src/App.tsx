import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { MainSection } from "./components/MainSection";
import { Sidebar } from "./components/Sidebar";
import { TodosContextProvider } from "./context/todos-context";

const App: React.FC = () => {
  const resizeHandler = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  resizeHandler();

  window.addEventListener("resize", resizeHandler);

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
