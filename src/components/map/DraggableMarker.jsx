import { useMemo, useRef, useState } from "react";
import { Marker, Popup } from "react-leaflet";
const DraggableMarker = ({ position }) => {
  const [myPosition, setMyPosition] = useState(position);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef?.current?.getLatLng();
        setMyPosition(marker);
      },
    }),
    []
  );
  return (
    <>
      <Marker
        draggable={false}
        eventHandlers={eventHandlers}
        position={[35.791591, 51.416347]}
        ref={markerRef}
      >
        <Popup minWidth={90}>شما اینجا هستید</Popup>
      </Marker>
      <Marker
        draggable={false}
        eventHandlers={eventHandlers}
        position={[35.783419, 51.423492]}
        ref={markerRef}
      >
        <Popup minWidth={90}>شما اینجا هستید</Popup>
      </Marker>
    </>
  );
};
export default DraggableMarker;
