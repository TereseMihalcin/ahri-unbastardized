import React, { useEffect, useRef } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Location() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.openfreemap.org/styles/bright',
      center: [-79.505993, 40.187897],
      zoom: 10
    });
 
    new maplibregl.Marker().setLngLat([-79.498009, 40.201099]).addTo(map); /* greendance */
    new maplibregl.Marker().setLngLat([-79.483337, 40.143366]).addTo(map); /* Nino's */


    return () => map.remove();
  }, []);

  return (
    <>
    <div class="">

        <h2>Ceremony:</h2>
        <div class="d-flex ms-5 gap-4 mt-3">
        <h3 class="flex-shrink-0">Greendance Winery</h3>
        <p class="flex-shrink-1">Join us at Greendance Winery for our Wedding Ceremony! We'll be nestled toward at the back of their property for our small private wedding ceremony. Our photographer will be around taking some nice photos of everyone beforehand. They have live music scheduled unrelated to the wedding so you may also hear a rock band playing in the distance till around 4pm. After the ceremony we'll enjoy wine tastings (for those who partake) and appetizers, before we head to dinner. There may even be a bonus fruit filled treat made by their partner Sandhill berries.</p>
        </div>
        <h2>Dinner:</h2>
        <div class="d-flex ms-5 gap-4 mt-3">
        <h3 class="flex-shrink-0">Nino's Restaurant</h3>
        <p class="flex-shrink-1">After the ceremony, we'll have dinner at Nino's restaurant nearby. At the time of writing this, I have never been so maybe I'll be as surprised as you! We'll take golden hour photos on Nino's property around 6:30. Afterward, we'll head in for some grub. Here is a link to their menu. You can order anything from their normal menu. So feel free to choose something now so you can look forward to it for months!</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#D78693" d="M990 45H535.5A35.2 35.2 0 0 1 500 11.6 35.2 35.2 0 0 1 464.5 45H10v10h454.5A35.2 35.2 0 0 1 500 88.4 35.2 35.2 0 0 1 535.5 55H990V45Z"></path></svg>
        <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />

       
        
        
    </div>
    
    </>
  );
}


