import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarker from '../assets/images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy"/>

          <h2>Escoja un orfanato en el mapa</h2>
          <p>Muchos niños están esperando tu visita :) </p>
        </header>

        <footer>
          <strong>Ciudad del Este</strong>
          <span>Alto Parana</span>
        </footer>
      </aside>


      <Map
        center={[-25.5161497, -54.6427235]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>


      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export  default OrphanagesMap
