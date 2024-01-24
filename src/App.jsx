import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes";
import "./styles/index.scss"
import { UserProvider } from "./providers/Context";

function App() {
  return (
    <>
      <UserProvider >
        <ToastContainer autoClose={2 * 1000} />
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
