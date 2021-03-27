import { Button } from '@material-ui/core';
import { useState } from 'react';
import './MedicineInfoPanel.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Link} from 'react-router-dom';


function MedicineInfoPanel() {
    const [med,setMed] = useState('1');
    // const [medicine,setmedicine] = useState([]);

    // useEffect(()=>{
    //     const getCountryData = async () => {
    //         await fetch("https://app.collaborativedrug.com/api/v1/")
    //         .then((response)=> response.json())
    //         .then((data)=>{
    //             const medicine =data.map((medicine)=> (
    //                 {
    //                     name :medicine.name,
    //                 }
    //             ));
    //             setmedicine(medicine);
    //         });
    //     };
    //     getCountryData();
    // },[]);
    return (
        <div className="medicineInfoPanel">
           <div className="medicineInfoPanel__header">
                <h4>MEDICINE NAME</h4>
                <input type="number" placeholder="Number you need?" value = {med} onChange={(e)=>setMed(e.target.value)}></input>
            </div> 
            <div className="medicineInfoPanel__footer">
                <h5>
                    Generic price:{20*med} 
                </h5>
                <h5>
                    Market Price:{100*med}
                </h5>
                <h5>You save : {(100*med) - (20*med)}</h5>
                <Button><Link to="/locateStore" >Get details</Link><ArrowRightIcon/></Button>
            </div>
            
            
        </div>
    )
}

export default MedicineInfoPanel
