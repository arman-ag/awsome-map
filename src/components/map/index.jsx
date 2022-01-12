import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useSelector } from "react-redux";
import DraggableMarker from "./DraggableMarker";

const Map = ({}) => {
  const [zoom, setZoom] = useState();
  const location = useSelector((state) => state.location.locations);
  const [centerPosition, setCenterPosition] = useState(0);
  useEffect(() => {
    console.log("state...", location);
    let lat = 0;
    let lng = 0;
    for (const item of location) {
      lng += item.long;
      lat += item.lat;
    }
    setCenterPosition([lat / location.length, lng / location.length]);
    console.log("csc", [lat / location.length, lng / location.length]);
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
  console.log("zoom", zoom);

  return (
    <MapContainer
      center={[35.786556399999995, 51.4509014]}
      zoom={12}
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
