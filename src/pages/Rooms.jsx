import { Link } from "react-router-dom";
import { useRooms } from "../context/RoomsContext";

function Rooms() {
  const { rooms } = useRooms();

  return (
    <div className="container">
      <h1>Rooms</h1>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="room-color"
            style={{ backgroundColor: room.color }}
          >
            <h4>{room.name}</h4>
            <p>{room.type}</p>

<Link to={`/rooms/${room.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
