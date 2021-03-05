import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import pickupMarker from "../common/Icon/pickup-marker.svg";
import dropoffMarker from "../common/Icon/dropoff-marker.svg";

const defaultMapOptions = {
  disableDefaultUI: true,
};

const MapContainer: React.ComponentClass<any> = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ dropoff, pickup }: any) => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 48.86982, lng: 2.334579 }}
      options={defaultMapOptions}
    >
      {pickup?.latitude && (
        <Marker
          icon={pickupMarker}
          position={{ lat: pickup.latitude, lng: pickup.longitude }}
        />
      )}
      {dropoff?.latitude && (
        <Marker
          icon={dropoffMarker}
          position={{ lat: dropoff.latitude, lng: dropoff.longitude }}
        />
      )}
    </GoogleMap>
  );
});

export default MapContainer;
