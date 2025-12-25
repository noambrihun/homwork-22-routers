import { Link } from "react-router-dom";
import { useRooms } from "../context/RoomsContext";

function Home() {
  const { rooms } = useRooms();
  return (
    <div className="container">
      <h1>Smart house</h1>

      <Link to="/AddRoom">
        <button className="add-btn">+</button>
      </Link>
      <br /> 
      <br />

      <h2>Rooms</h2>
      {rooms.length === 0 ? (
        <p>No rooms yet. Add your first room!</p>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {rooms.map((room) => (
            <div
              key={room.id}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: room.color,
                padding: "5px",
              }}
            >
              <h4>{room.name}</h4>
              <p>{room.type}</p>
              <Link to={`/rooms/${room.id}`}>Details</Link>
            </div>
          ))}
        </div>
      )}

      <br />
      <Link to="/rooms">Go to rooms</Link>
    </div>
  );
}

export default Home;
