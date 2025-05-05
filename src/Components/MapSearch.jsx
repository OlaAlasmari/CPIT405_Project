import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import L from 'leaflet';
import StoryCard from './StoryCard'; 

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ChangeMapView = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 13);
  }, [coords, map]);
  return null;
};

const MapSearch = () => {
  const location = useLocation();
  const defaultTerm = location.state?.searchTerm || '';
  const [searchTerm, setSearchTerm] = useState(defaultTerm);
  const [position, setPosition] = useState([24.7136, 46.6753]); // الرياض كموقع افتراضي

  useEffect(() => {
    if (defaultTerm) {
      handleSearch(defaultTerm);
    }
  }, [defaultTerm]);

  const handleSearch = async (term = searchTerm) => {
    if (!term) return;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${term}`);
      const data = await response.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        setPosition([lat, lon]);
      } else {
        alert('الموقع غير موجود');
      }
    } catch (error) {
      alert('حدث خطأ أثناء البحث. حاول مجددًا.');
      console.error(error);
    }
  };

  return (
<div className="container d-flex justify-content-center my-5">
  <StoryCard title="الخريطة">
    <h4 className="main4 mb-3">ابحث عن موقع على الخريطة</h4>

    <div className="d-flex justify-content-center mb-3">
      <input
        type="text"
        className="form-control me-2 w-50"
        placeholder="اكتب اسم الموقع (مثال: جدة، مكة...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => handleSearch()}>ابحث</button>
    </div>

    <div className="rounded-4 overflow-hidden border" style={{ height: '400px' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeMapView coords={position} />
        <Marker position={position}>
          <Popup>الموقع الذي بحثت عنه</Popup>
        </Marker>
      </MapContainer>
    </div>
  </StoryCard>
</div>
  );
};

export default MapSearch;
