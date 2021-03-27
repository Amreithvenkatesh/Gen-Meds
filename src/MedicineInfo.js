import React from 'react';
import './MedicineInfo.css';

import MedicineInfoPanel from './MedicineInfoPanel';


function MedicineInfo() {
    return (
        <div className="medicineInfo">
            <h3>4 results for MEDICINE :</h3>
            <MedicineInfoPanel />
            <MedicineInfoPanel />
            <MedicineInfoPanel />
            <MedicineInfoPanel />

        </div>
    )
}

export default MedicineInfo
