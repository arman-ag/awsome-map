import { Marker, Popup } from "react-leaflet";
const DraggableMarker = ({ position, zoom }) => {
  if (zoom > 10) {
    return (
      <>
        {position.map((item, index) => (
          <Marker
            key={index}
            draggable={false}
            position={[item.lat, item.long]}
          >
            <Popup minWidth={90}>{item.lable}</Popup>
          </Marker>
        ))}
      </>
    );
  } else {
    return null;
  }
};
export default DraggableMarker;
