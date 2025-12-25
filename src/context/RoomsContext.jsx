import { createContext, useContext, useState } from "react";

 const RoomsContext = createContext(null);

function RoomsProvider({ children }) {
  const [rooms, setRooms] = useState([]);

  function addRoom(newRoom) {
    console.log("App addRoom called", newRoom);
    setRooms([...rooms, { ...newRoom, devices: [] }]);
  }

  function addDevice(roomId, deviceType) {
    const newDevice = {
      id: Date.now(),
      type: deviceType,
    };

    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, devices: [...(room.devices || []), newDevice] }
          : room
      )
    );
  }

  return (
    <RoomsContext.Provider value={{ rooms, addRoom, addDevice }}>
      {children}
    </RoomsContext.Provider>
  );
}

export function useRooms() {
  const context = useContext(RoomsContext);
  if (!context) {
    throw new Error("useRooms must be used within a RoomsProvider");
  }
  return context;
}

export default RoomsProvider;