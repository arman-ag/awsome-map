import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const Map = () => {
  const location = useSelector((state) => state.location.locations);
  const [zoom, setZoom] = useState();
  const [centerPosition, setCenterPosition] = useState([35.6892, 51.389]);
  useEffect(() => {
    console.log("state...", location);
    let lat = 0;
    let lng = 0;
    for (const item of location) {
      lng += item.long;
      lat += item.lat;
    }
    setCenterPosition([lat / location.length, lng / location.length]);
  }, [location]);
  console.log({ centerPosition });

  const ZoomTracker = ({ setZoom }) => {
    const map = useMapEvents({
      zoom() {
        setZoom(map.getZoom());
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={centerPosition}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "100%" }}
    >
      <ZoomTracker setZoom={setZoom} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker zoom={zoom} position={location} />
    </MapContainer>
  );
};
export default Map;
