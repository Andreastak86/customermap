import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// customised icones
const greenIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + "/greenpin.png",
    iconSize: [22, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const yellowIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + "/yellowpin.png",
    iconSize: [22, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const redIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + "/redpin.png",
    iconSize: [22, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const KundeMarker = ({ position, status, color }) => {
    // choose the right colors of the marker
    let selectedIcon;
    if (color === "green") {
        selectedIcon = greenIcon;
    } else if (color === "yellow") {
        selectedIcon = yellowIcon;
    } else if (color === "red") {
        selectedIcon = redIcon;
    }

    return (
        <Marker position={position} icon={selectedIcon}>
            <Popup>Customer: {status}</Popup>
        </Marker>
    );
};

export default KundeMarker;
