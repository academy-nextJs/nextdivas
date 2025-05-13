"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// تنظیم آیکون پیش‌فرض Marker (برای رفع مشکل نبودن آیکون)
L.Icon.Default.mergeOptions({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
});

type Props = {
  lat: number;
  lng: number;
};

export default function LocationMap({ lat, lng }: Props) {
  return (
    <div className="h-96 w-full px-8">
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>موقعیت ملک</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
