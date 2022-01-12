import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const Map = () => {
  const location = useSelector((state) => state.location.locations);
  console.log("state...", location);
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker position={location} />
    </MapContainer>
  );
};
export default Map;
