import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;