import React, { useState, useRef } from "react";
import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./Locate.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Button } from "@material-ui/core";

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function Locate() {
  const [viewport, setViewport] = useState({
    latitude: 18.820089,
    longitude: 76.770653,
    width: "80vw",
    height: "80vh",
    zoom: 4
  });
  const mapRef = useRef();

  const url =
    "http://localhost:8000/updateMed/";
  const { data, error } = useSwr(url, { fetcher });
  const kendras = data && !error ? data.slice(0, 8000) : [];
  const points = kendras.map(kendra => ({
    type: "Feature",
    properties: { cluster: false, kendraId: kendra.id, kendraDistrict: kendra.District },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(kendra.Longitude),
        parseFloat(kendra.Latitude)
      ]
    }
  }));

  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        mapStyle="mapbox://styles/amreith/ckmxqtvno12wp17lq8593vrao"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );

                    setViewport({
                      ...viewport,
                      latitude,
                      longitude,
                      zoom: expansionZoom,
                      transitionInterpolator: new FlyToInterpolator({
                        speed: 2
                      }),
                      transitionDuration: "auto"
                    });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`crime-${cluster.properties.kendraId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <Button>
                <LocationOnIcon />
              </Button>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
}





