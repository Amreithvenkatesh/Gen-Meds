  
import React, { useState, useRef } from "react";
import useSwr from "swr";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./Locate.css";
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';


const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.6376,
    longitude: -1.135171,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });
  const mapRef = useRef();

  const url = "http://localhost:3008/locations";
  const { data, error } = useSwr(url, { fetcher });
  const kendras = data && !error ? data.slice(0, 8000) : [];
  const points = kendras.map(kendra =>
     ({
    type: "Feature",
    properties: { cluster: false, kendraId: kendra.id, district: kendra.District },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(kendra.Longitude),
        parseFloat(kendra.Latitude)
      ]
    }
  })
  );

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
        mapboxApiAccessToken="pk.eyJ1IjoiYW1yZWl0aCIsImEiOiJja21zMG55bnowZDlsMm9zMWN4NzlqMXR0In0.JxDiRT_kLg9Z3e_5RPJTUw"
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
              key={`kendra-${cluster.properties.kendraId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="kendra-marker">
                  <LocationSearchingIcon/> 
              </button>``
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
}


















// import React, { useState, useRef } from "react";
// import useSwr from "swr";
// import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
// import useSupercluster from "use-supercluster";
// import "./Locate.css";
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { Button } from "@material-ui/core";


// const fetcher = (...args) => fetch(...args).then(response =>response.json());

// export default function Locate(){
//     const [viewport, setViewport] = useState({
//         latitude: 18.820089,
//         longitude: 76.770653,
//         width: "80vw",
//         height: "80vh",
//         zoom: 4
//       });
//     const mapRef = useRef();
  

//   const url = "http://localhost:3008/locations";
//   const {data,error} = useSwr(url,fetcher);
//   const kendras = data && !error ? data.slice (0,100):[];
//   const points = kendras.map(kendra =>
//      ({
//     type: "Feature",
//     properties: { cluster: false, kendraId: kendra.id, kendraDistrict: kendra.District },
//     geometry: {
//       type: "Point",
//       coordinates: [
//         kendra.Longitude,
//         kendra.Latitude
//       ]
//     }
//   }));

//   const bounds = mapRef.current
//     ? mapRef.current
//         .getMap()
//         .getBounds()
//         .toArray()
//         .flat()
//     : null;


//   const { clusters } = useSupercluster({
//     points,
//     bounds,
//     zoom: viewport.zoom,
//     options: { radius: 75, maxZoom: 20 }
//   });

//   console.log(clusters);

//   return ( <ReactMapGL
//   {...viewport} 
//   maxZoom={20}  
//   mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//   onViewportChange={newViewport => {
//               setViewport({ ...newViewport });}}
//   ref={mapRef}
//   >
//     {kendras.map(kendra=> (
//       <Marker key={kendra.id}
//       latitude={parseFloat(kendra.Latitude)}
//       longitude={parseFloat(kendra.Longitude)}>
//       </Marker>
//     ))} 
//   </ReactMapGL>)

// }






// import "mapbox-gl/dist/mapbox-gl.css"

// const fetcher = (...args) => fetch(...args).then(response => response.json());

// export default function Locate() {
//   const [viewport, setViewport] = useState({
//     latitude: 18.820089,
//     longitude: 76.770653,
//     width: "80vw",
//     height: "80vh",
//     zoom: 4
//   });
//   const mapRef = useRef();

//   const url =
//     "http://localhost:3008/locations";
//   const { data, error } = useSwr(url, { fetcher });
//   const kendras = data && !error ? data.slice(0, 8000) : [];
  
//   const points = kendras.map(kendra =>
//      ({
//     type: "Feature",
//     properties: { cluster: false, kendraId: kendra.id, kendraDistrict: kendra.District },
//     geometry: {
//       type: "Point",
//       coordinates: [
//         parseFloat(kendra.Longitude),
//         parseFloat(kendra.Latitude)
//       ]
//     }
//   }));
//   const bounds = mapRef.current
//     ? mapRef.current
//         .getMap()
//         .getBounds()
//         .toArray()
//         .flat()
//     : null;

//   const { clusters, supercluster } = useSupercluster({
//     points,
//     bounds,
//     zoom: viewport.zoom,
//     options: { radius: 75, maxZoom: 20 }
//   });

//   return (
//     <div>
//       <ReactMapGL
//         {...viewport}
//         maxZoom={20}
//         mapStyle="mapbox://styles/amreith/ckmxqtvno12wp17lq8593vrao"
//         mapboxApiAccessToken="pk.eyJ1IjoiYW1yZWl0aCIsImEiOiJja21zMG55bnowZDlsMm9zMWN4NzlqMXR0In0.JxDiRT_kLg9Z3e_5RPJTUw"
//         onViewportChange={newViewport => {
//           setViewport({ ...newViewport });
//         }}
//         ref={mapRef}
//       >
//         {clusters.map(cluster => {
//           const [longitude, latitude] = cluster.geometry.coordinates;
//           const {
//             cluster: isCluster,
//             point_count: pointCount
//           } = cluster.properties;

//           if (isCluster) {
//             return (
//               <Marker className="marker"
//                 key={`cluster-${cluster.id}`}
//                 latitude={latitude}
//                 longitude={longitude}
//               >
//                 <div
//                   className="cluster-marker"
//                   style={{
//                     width: `${10 + (pointCount / points.length) * 20}px`,
//                     height: `${10 + (pointCount / points.length) * 20}px`
//                   }}
//                   onClick={() => {
//                     const expansionZoom = Math.min(
//                       supercluster.getClusterExpansionZoom(cluster.id),
//                       20
//                     );

//                     setViewport({
//                       ...viewport,
//                       latitude,
//                       longitude,
//                       zoom: expansionZoom,
//                       transitionInterpolator: new FlyToInterpolator({
//                         speed: 2
//                       }),
//                       transitionDuration: "auto"
//                     });
//                   }}
//                 >
//                   {pointCount}
//                 </div>
//               </Marker>
//             );
//           }

//           return (
//             <Marker
//               key={`crime-${cluster.properties.kendraId}`}
//               latitude={latitude}
//               longitude={longitude}
//             >
//               <Button>
//                 <LocationOnIcon />
//               </Button>
//             </Marker>
//           );
//         })}
//       </ReactMapGL>
//     </div>
//   );
// }













// import React, { useEffect, useState } from 'react';
// import ReactMapGL,{Marker} from 'react-map-gl';
// import './Locate.css';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { Button } from '@material-ui/core';


// export default function Locate() {
//     const[kendras,setKendras] = useState([])

//     useEffect(()=>{
//         const getKendrasData = async () => {
//             await fetch("http://localhost:3008/locations")
//             .then((response)=>response.json())
//             .then((data)=>{
//                 const kendrasDetails = data.map((kendra)=>(
//                     {
//                         Shop_id : kendra.Shop_id,
//                         District :kendra.District,
//                         address: kendra.Address,
//                         latitude: kendra.Latitude,
//                         longitude : kendra.Longitude,
//                         pincode: kendra.Pincode,
//                         vendorName: kendra.Vendor_Name,
//                     }
//                 ));
//                 setKendras(kendrasDetails);
//             });
//         };
//         getKendrasData();
//     },[]);


//     const [viewport,setViewport] = useState({
//         latitude :28.704060,
//         longitude:77.102493,
//         zoom:10,
//         width: "100%",
//         height:"500px"
//     })
//     return (
//         <div className="locate">
//             <div className="locate__header">
//                 <h3>Medicine available in: </h3>
//             </div>
//             <div className="locate__map">
//                 <ReactMapGL 
//                 {...viewport}
//                 mapStyle="mapbox://styles/amreith/ckms1h28t2miv17p7ai6tcsip"
//                 mapboxApiAccessToken="pk.eyJ1IjoiYW1yZWl0aCIsImEiOiJja21zMG55bnowZDlsMm9zMWN4NzlqMXR0In0.JxDiRT_kLg9Z3e_5RPJTUw"
//                 onViewportChange={viewport =>{
//                     setViewport(viewport);
//                 }}
//                 >
//                 {kendras.map((kendra)=>(
//                     <Marker key={kendra.id} latitude={kendra.latitude} longitude={kendra.longitude}>
//                         <Button className="locate__map__icon"><LocationOnIcon/></Button>
//                     </Marker>
//                 ))}
//                 </ReactMapGL>
//             </div>
            
//         </div>
//     )
// }



