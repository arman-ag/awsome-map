import { Marker, Popup } from "react-leaflet";
const DraggableMarker = ({ position }) => {
  return (
    <>
      {position.map((item, index) => {
        console.log("item", item);
        return (
          <Marker
            key={index}
            draggable={false}
            position={[item.lat, item.long]}
          >
            <Popup minWidth={90}>{item.lable}</Popup>
          </Marker>
        );
      })}
    </>
  );
};
export default DraggableMarker;
