import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import styled from "styled-components";
import {FaMapPin} from "react-icons/fa";
import Head from "next/head";
// import 'leaflet/dist/leaflet.css'


const MapWrapper = styled.div`
  height: 40rem;
  width: 100%;
  background: red;
`

const Dot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
`

const Map = ({lng, lat}) => (
    <>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>
        </Head>
        <MapWrapper>
            <MapContainer
                center={{
                    lat,
                    lng
                }}
                zoom={16}
                scrollWheelZoom={false}
                style={{width: "100%", height: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat, lng}}>
                    <FaMapPin/>
                    <Dot/>
                    <h2>HEHE</h2>
                </Marker>
            </MapContainer>
        </MapWrapper>
    </>
)


export default Map
