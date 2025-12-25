import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useRooms } from "../context/RoomsContext";

function RoomDetails() {
  const { rooms, addDevice } = useRooms();
  const { id } = useParams();
  const room = rooms.find((r) => r.id === Number(id));
  const [selectedDevice, setSelectedDevice] = useState("");

  if (!room) return <h2>Room not found</h2>;

  const deviceTypes = [
    "Air conditioner",
    "Lamp",
    "Stereo system",
    "Water heater",
  ];

  function handleAddDevice() {
    if (!selectedDevice) return;
    addDevice(room.id, selectedDevice);
    setSelectedDevice("");
  }

  return (
    <div className="container">
      <h1>{room.name}</h1>
      <p>Type: {room.type}</p>

      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: room.color,
          marginBottom: "20px",
        }}
      />

      <h2>Devices</h2>
      <div style={{ marginBottom: "20px" }}>
        <select
          value={selectedDevice}
          onChange={(e) => setSelectedDevice(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="">Select device</option>
          {deviceTypes.map((deviceType) => (
            <option key={deviceType} value={deviceType}>
              {deviceType}
            </option>
          ))}
        </select>
        <button onClick={handleAddDevice}>Add Device</button>
      </div>

      <div>
        {room.devices && room.devices.length > 0 ? (
          <ul>
            {room.devices.map((device) => (
              <li key={device.id}>{device.type}</li>
            ))}
          </ul>
        ) : (
          <p>No devices added yet</p>
        )}
      </div>

      <br />
      <Link to="/rooms">Back</Link>
    </div>
  );
}

export default RoomDetails;
