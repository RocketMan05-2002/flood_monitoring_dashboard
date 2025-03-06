import ThemeToggle from "../ThemeToggle/ThemeToggle";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h1>🌊 Flood Monitoring Dashboard</h1>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;