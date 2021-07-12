import React from 'react';
import './MedicineList.css'
import { useEffect } from 'react';
import { useState } from 'react';
// import axios from 'axios';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



function MedicineList({medicines}) {
    const [medicine,setmedicine] = useState(null);
    const apiUrl  = 'http://localhost:3008/medicine/';

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setmedicine(data)
        })
    },[]);
    
    // const fetchData = async () => {
    //     const response = await axios.get(apiUrl)

    //     setmedicine(response.data) 
    // }

    return (
        <div className="medicineList">
            <h3>Search for medicine, symptoms, therapy ...</h3>
            <div className="medicineList__search">
                <input type="text" placeholder="search" />
                <SearchRoundedIcon/>
            </div>
            <div className="medicineList__data">
                {medicine &&
                    medicine.map((medicine,index)=>{
                        return(
                            <div className="medicineList__data__loop" key={index}>
                                <div className="medicine_details">
                                    <h3>MRP:{medicine.mrp}</h3>
                                    <h3>Units:{medicine.units}</h3>
                                </div>
                                <div className="medicine_name">
                                    <h2>{medicine.generic_name}</h2>
                                </div>
                            
                            </div>
                        )
                      })
                }
            </div>
        </div>

    )
}

export default MedicineList
