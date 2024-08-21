import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const ktm = { lng: 85.324, lat: 27.7172 };
  const zoom = 14;
  maptilersdk.config.apiKey = "5KcqYQ9o1qNsAWH35Z8Y";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [ktm.lng, ktm.lat],
      zoom: zoom,
    });
  }, [ktm.lng, ktm.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
