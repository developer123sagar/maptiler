import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const ktm = { lng: 85.3240, lat: 27.7172 };
  const zoom = 14;
  maptilersdk.config.apiKey = "5KcqYQ9o1qNsAWH35Z8Y";

  return <div></div>;
};

export default Map;
