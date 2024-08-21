import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const ktm = { lng: 85.324, lat: 27.7172 };
  const zoom = 14;
  maptilersdk.config.apiKey = "5KcqYQ9o1qNsAWH35Z8Y";

  console.log(location)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      },
      (err) => {
        console.log(err)
        setError("Unable to retrieve your location");
      }
    );
  }, []);



  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [ktm.lng, ktm.lat],
      zoom: zoom,
    });

    if (location)
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([location?.lat, location?.lat])
        .addTo(map.current);
  }, [ktm.lng, ktm.lat, zoom]);

  console.log(error)

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
