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
        <div class="info d-lg-flex ms-5 gap-4 mt-3 mb-4">
            <div class="flex-shrink-0">
            <h3>Greendance Winery</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><g fill="#BCD786"><path d="M173.9 384.8c-.1-6.4-.2-12.7-.1-18.8 98.4-118.8 92.2-226.4-13.7-311 18.6 147-121.6 172.1-7.1 324.1-1.7-125.9 29.8-199.5 31.1-202.6 1.2-2.8 4.4-4 7.2-2.8 1.3.6 2.1 2.7 1.1 5.3s-32.1 76.6-29.3 206.1c.8 37.4 16 57.1 16.6 57.9a5.4 5.4 0 0 0 7.7.9 5.4 5.4 0 0 0 .9-7.7c-.1-.2-13.6-17.7-14.3-51.4Z"></path><path d="M396 382.3c-4.9-9.3-9-18.5-12.4-27.6 23.7-141.5 206.9-156.8 1.1-299.8 0 155.9-190.1 159-14.5 320.1-28.6-62.5-20.5-112.2-7.9-143.6a155.3 155.3 0 0 1 38.3-57c2.3-2 7.4-2.5 7.7.6.3 2.7-2.6 4.1-3.8 5.4-8 8.5-22.1 25.8-32.2 51.1-13.4 33.4-21.8 87.6 13.9 155.9a158.6 158.6 0 0 1 18.1 52.6c.2 2.8 2.6 5 5.4 5s5.7-2.8 5.5-5.9c0-1-2.3-24.3-19.3-56.7Z"></path><path d="M597.2 351.7C612.4 212.9 717.6 195.6 599 55c-19 123.4-201.8 74-17.1 312.7-22.3-54-37.4-118.7-22.6-150.1a5.5 5.5 0 0 1 7.3-2.6c1.8.9 2.5 3 1.8 4.8-14.8 36.2 6 111.6 32.2 167.4 15.2 32.5 29.1 55 29.2 55.2 1.6 2.6 5 3.4 7.5 1.8 2.6-1.6 3.4-5 1.8-7.5a586.3 586.3 0 0 1-41.8-85Z"></path><path d="M770.6 55c49.8 110-210.3 181.1-9.1 325.3-15.5-83.7 2.9-137.2 21.5-167.5 15-24.6 35.2-41.9 46.8-47.5 2.9-1.4 5.2 2.8 2.6 4.6a144 144 0 0 0-39.4 42.9c-18.9 31-37.8 86.2-20.4 173.1 6.7 33.4 2.2 52.1 2.2 52.2a5.4 5.4 0 0 0 5.3 6.8c2.4 0 4.7-1.6 5.3-4.1.2-.8 5.2-21-2-57.1l-1.5-7.7c167.9-109.5 129.3-244.9-11.2-321.1Z"></path></g></svg>
            </div>
        <p class="flex-shrink-1">Join us at <a href="https://www.greendancewinery.com/" target="_blank" rel="noreferrer">Greendance Winery</a> for our Wedding Ceremony! We'll be nestled toward at the back of their property for our small private wedding ceremony. Our photographer will be around taking some nice photos of everyone beforehand. They have live music scheduled unrelated to the wedding so you may also hear a rock band playing in the distance till around 4pm. After the ceremony we'll enjoy wine tastings (for those who partake) and appetizers (yum), before we head to dinner. You may even find a bonus fruit filled treat made by their partner Sandhill Berries.</p>
        </div>
        <h2>Dinner:</h2>
        <div class="info d-lg-flex ms-5 gap-4 mt-3">
        <div class="flex-shrink-0">
        <h3>Nino's Restaurant</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><g fill="#BCD786"><path d="M173.9 384.8c-.1-6.4-.2-12.7-.1-18.8 98.4-118.8 92.2-226.4-13.7-311 18.6 147-121.6 172.1-7.1 324.1-1.7-125.9 29.8-199.5 31.1-202.6 1.2-2.8 4.4-4 7.2-2.8 1.3.6 2.1 2.7 1.1 5.3s-32.1 76.6-29.3 206.1c.8 37.4 16 57.1 16.6 57.9a5.4 5.4 0 0 0 7.7.9 5.4 5.4 0 0 0 .9-7.7c-.1-.2-13.6-17.7-14.3-51.4Z"></path><path d="M396 382.3c-4.9-9.3-9-18.5-12.4-27.6 23.7-141.5 206.9-156.8 1.1-299.8 0 155.9-190.1 159-14.5 320.1-28.6-62.5-20.5-112.2-7.9-143.6a155.3 155.3 0 0 1 38.3-57c2.3-2 7.4-2.5 7.7.6.3 2.7-2.6 4.1-3.8 5.4-8 8.5-22.1 25.8-32.2 51.1-13.4 33.4-21.8 87.6 13.9 155.9a158.6 158.6 0 0 1 18.1 52.6c.2 2.8 2.6 5 5.4 5s5.7-2.8 5.5-5.9c0-1-2.3-24.3-19.3-56.7Z"></path><path d="M597.2 351.7C612.4 212.9 717.6 195.6 599 55c-19 123.4-201.8 74-17.1 312.7-22.3-54-37.4-118.7-22.6-150.1a5.5 5.5 0 0 1 7.3-2.6c1.8.9 2.5 3 1.8 4.8-14.8 36.2 6 111.6 32.2 167.4 15.2 32.5 29.1 55 29.2 55.2 1.6 2.6 5 3.4 7.5 1.8 2.6-1.6 3.4-5 1.8-7.5a586.3 586.3 0 0 1-41.8-85Z"></path><path d="M770.6 55c49.8 110-210.3 181.1-9.1 325.3-15.5-83.7 2.9-137.2 21.5-167.5 15-24.6 35.2-41.9 46.8-47.5 2.9-1.4 5.2 2.8 2.6 4.6a144 144 0 0 0-39.4 42.9c-18.9 31-37.8 86.2-20.4 173.1 6.7 33.4 2.2 52.1 2.2 52.2a5.4 5.4 0 0 0 5.3 6.8c2.4 0 4.7-1.6 5.3-4.1.2-.8 5.2-21-2-57.1l-1.5-7.7c167.9-109.5 129.3-244.9-11.2-321.1Z"></path></g></svg>
        </div>
       
        <p class="flex-shrink-1">After the ceremony, we'll have dinner nearby at Nino's restaurant. At the time of writing this, I have never been so maybe I'll be as surprised as you! We'll take golden hour photos on Nino's property around 6:30. Afterward, we'll head in for some grub. <a href="https://thelaurelgarden.com/menu/" target="_blank" rel="noreferrer">Here is a link to their menu</a>. You can order anything from their normal menu. So feel free to choose something now so you can look forward to it for months!</p>
        </div>
        <svg class="mt-5 mb-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="#D78693" d="M990 45H535.5A35.2 35.2 0 0 1 500 11.6 35.2 35.2 0 0 1 464.5 45H10v10h454.5A35.2 35.2 0 0 1 500 88.4 35.2 35.2 0 0 1 535.5 55H990V45Z"></path></svg>
        <div ref={mapContainer} style={{ height: '400px', width: '100%' }} />

       
        
        
    </div>
    
    </>
  );
}


