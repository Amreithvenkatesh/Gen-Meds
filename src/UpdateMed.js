
import MedicineList from './MedicineList';
import { useEffect, useState } from 'react';

function UpdateMed() {
    const [genericname,setGenericname] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(()=>{
            fetch('http://localhost:8000/users/search/generic/')
                .then(res =>{
                    if(!res.ok){
                        throw Error('Data not fetched');
                    }
                    return res.json();
                })
                .then(data =>{  
                    setGenericname(data);
                    setisLoading(false);
                    setError(null); 
                })
                .catch(err =>{
                    setError(err.messsage);
                    setisLoading(false);
                })
        },[]
        );
    return (
        <div className="updateMed">
            {error && <div>{error}</div>}
            {isLoading && <div>Fetching data...</div>}
            {genericname && <MedicineList genericname={genericname} />}
            <MedicineList />
        </div>
    )
}

export default UpdateMed
