import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './Locate.css';


export default function Locate() {
    const [viewport,setViewport] = useState({
        latitude :28.704060,
        longitude:77.102493,
        zoom:10,
        width: "100%",
        height:"500px"
    })
    return (
        <div className="locate">
            <div className="locate__header">
                <h3>Medicine available in:</h3>
            </div>
            <div className="locate__map">
                <ReactMapGL 
                {...viewport}
                mapStyle="mapbox://styles/amreith/ckms1h28t2miv17p7ai6tcsip"
                mapboxApiAccessToken="pk.eyJ1IjoiYW1yZWl0aCIsImEiOiJja21zMG55bnowZDlsMm9zMWN4NzlqMXR0In0.JxDiRT_kLg9Z3e_5RPJTUw"
                onViewportChange={viewport =>{
                    setViewport(viewport);
                }}
                >

                </ReactMapGL>
            </div>
            
        </div>
    )
}



