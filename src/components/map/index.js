import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './map.css'

function Map() {

  const [state, setState] = useState({
    lat: 55.702868,
    long: 35.530865,
    zoom: 10
  })

  const center = [state.lat, state.long]
  return (
    <MapContainer zoom={state.zoom} center={center} crollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map


