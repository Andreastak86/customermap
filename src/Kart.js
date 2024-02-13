import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import KundeMarker from "./KundeMarker";

const Kart = () => {
    const kundeData = [
        //here you list up the customer you got
        {
            position: [59.9010186052882, 10.815282810833223],
            status: "Customer 1",
            color: "green",
        },
        {
            position: [58.04511333883757, 7.462735399654857],
            status: "Customer 2",
            color: "green",
        },
        {
            position: [58.912443512115885, 5.813039234965819],
            status: "Customer 3",
            color: "green",
        },
        {
            position: [60.418523853670564, 5.330158379918563],
            status: "Customer 4",
            color: "green",
        },
        {
            position: [67.2861573786384, 14.466264860547922],
            status: "Customer 5",
            color: "green",
        },

        //customer on hold
        {
            position: [61.01191158844864, 14.486665100301048],
            status: "On Hold1",
            color: "yellow",
        },
        {
            position: [57.467346767785166, 10.039946761112338],
            status: "On Hold2",
            color: "yellow",
        },

        //Red pin - customer that said no!
        {
            position: [59.940145399878595, 30.38569513614522],
            status: "No go",
            color: "red",
        },
    ];

    return (
        <MapContainer
            center={[63.4305, 10.3951]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}
            preferCanvas={true}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {kundeData.map((kunde, index) => (
                <KundeMarker
                    key={index}
                    position={kunde.position}
                    status={kunde.status}
                    color={kunde.color}
                />
            ))}
        </MapContainer>
    );
};

export default Kart;
