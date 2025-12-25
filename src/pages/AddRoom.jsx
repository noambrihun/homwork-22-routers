import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRooms } from "../context/RoomsContext";

function AddRoom() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("#ffffff");
  const navigate = useNavigate();
  const { addRoom } = useRooms();

  function handleAddRoom() {
    if (!name || !type) return alert("Please fill in all fields");

    const room = {
      id: Date.now(),
      name,
      type,
      color,
    };

    addRoom(room);

    setName("");
    setType("");
    setColor("#ffffff");
    console.log("handleAddRoom clicked");
    navigate("/rooms");
  }

  return (
    <div className="container">
      <div className="form">
      <h1>Add Room</h1>

      <input
        placeholder="Room name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select type</option>
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
      </select>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button onClick={handleAddRoom}>Add Room</button>
      </div>
    </div>
  );
}

export default AddRoom;
