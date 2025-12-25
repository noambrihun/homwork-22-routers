import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoomsProvider from "./context/RoomsContext";
import Home from "./pages/Home";
import AddRoom from "./pages/AddRoom";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";

import "./App.css";

function App() {
  return (
    <RoomsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddRoom" element={<AddRoom />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </RoomsProvider>
  );
}

export default App;

