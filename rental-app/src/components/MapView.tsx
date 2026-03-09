"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { RentalItem } from "@/lib/itemStore";

const DEFAULT_CENTER: [number, number] = [21.1458, 79.0882]; // Nagpur center

function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// Generate consistent synthetic lat/lng around Nagpur based on IDs
function getItemLocation(item: RentalItem): [number, number] {
    const hash1 = hashString(item.id + "lat") % 1000;
    const hash2 = hashString(item.id + "lng") % 1000;
    
    const lat = DEFAULT_CENTER[0] + (hash1 / 1000) * 0.1 - 0.05;
    const lng = DEFAULT_CENTER[1] + (hash2 / 1000) * 0.1 - 0.05;
    
    return [lat, lng];
}

interface MapViewProps {
    items: RentalItem[];
    onItemSelect?: (item: RentalItem) => void;
}

export default function MapView({ items, onItemSelect }: MapViewProps) {
    return (
        <MapContainer
            center={DEFAULT_CENTER}
            zoom={13}
            zoomControl={false}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {items.map((item) => {
                const [lat, lng] = getItemLocation(item);
                const priceLabel = `₹${item.pricePerDay}`;
                
                const icon = L.divIcon({
                    className: "custom-map-marker",
                    html: `<div style="background-color: #306EE8; color: white; padding: 4px 10px; border-radius: 999px; font-weight: bold; font-size: 13px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 2px solid white; white-space: nowrap; cursor: pointer; transition: transform 0.2s;">${priceLabel}</div>`,
                    iconAnchor: [30, 20],
                });

                return (
                    <Marker 
                        key={item.id} 
                        position={[lat, lng]} 
                        icon={icon}
                        eventHandlers={{
                            click: () => {
                                if (onItemSelect) {
                                    onItemSelect(item);
                                }
                            }
                        }}
                    >
                    </Marker>
                );
            })}
        </MapContainer>
    );
}
