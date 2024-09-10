import { Sidebar } from "./components/Sidebar";
import { AppProvider } from "./contexts/AppContext";
import { AppAuthProvider } from "./contexts/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./style/GlobalStyle";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalAdd } from "./components/ModalAdd";
import { ModalUpdate } from "./components/ModalUpdate";
import { ModalDelete } from "./components/ModalDelete";

function App() {
  return (
    <AppProvider>
      <AppAuthProvider>
        <GlobalStyle />
        <ToastContainer />
        <Container>
          <ModalAdd />
          <ModalUpdate />
          <ModalDelete />
          <AppRoutes />
        </Container>
      </AppAuthProvider>
    </AppProvider>
  );
}

export default App;
