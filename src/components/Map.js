import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import "../css/App.css";

export default function Mapp(props) {
  return props.location.base ? (
    <Map
      center={[props.location.coord.lat, props.location.coord.lon]}
      zoom={11}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[props.location.coord.lat, props.location.coord.lon]} />
    </Map>
  ) : (
    ""
  );
}
