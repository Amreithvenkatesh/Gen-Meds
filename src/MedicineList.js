// import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './MedicineList.css';

function MedicineList({medicineList}) {
    const [ searchTerm, setSearchTerm] = useState("");
    return (
        <div className="medicineList">
            <div className="medicineList__search">
            <h3>Search the medicine you want to update:</h3>
            <input className="search-bar" placeholder="Enter Medicine to search ..." type="text" onChange={(event)=>{
                setSearchTerm(event.target.value);
            }}></input>
            {/* {medicineList.filter((val)=> {
                    if(searchTerm === ""){
                        return val;
                    }
                    else if(val.Student_Name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val; 
                        }return null;
                }).map((medicineList)=>(
                        <div className="medicineList__name">
                            {medicineList.name}
                            <input type="number" placeholder="Quantity Increased"/>
                            <Button/>
                        </div>
                ))} */}
            </div> 
        </div>
    )
}

export default MedicineList
