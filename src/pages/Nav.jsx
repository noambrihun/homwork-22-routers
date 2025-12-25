import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/addRoom">Add Room</Link>
    </nav>
  );
}

export default Nav;
