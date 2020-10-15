import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../services/api';
import mapIcon from "../utils/mapIcon";

import mapMarker from '../assets/images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, set_orphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(res => {
      set_orphanages(res.data)
    })
  }, [])

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

        {
          orphanages.map(orphanage => (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude,orphanage.longitude]}
            >
              {console.log(orphanage)}

              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>

            </Marker>
          ))
        }

      </Map>


      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}

export  default OrphanagesMap
