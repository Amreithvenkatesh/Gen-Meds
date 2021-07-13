import React,{Component} from 'react';
import './MedicineList.css'
import Movies from './movies';
// import { useEffect } from 'react';
// import { useState } from 'react';
import axios from 'axios';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

class MedicineList extends Component{

    state = {
        movies: null,
        loading: false,
        value: ''
      };

    componentDidMount = () => {
    fetch('https://serene-falls-13179.herokuapp.com/search?term=')
    .then((response) => response.json())
    .then(medicines => {
        this.setState({ movies: medicines });
    },);
    }
    


    search = async val => {
    this.setState({ loading: true });
    const res = await axios(
        `https://serene-falls-13179.herokuapp.com/search?term=${val}`
    );
    const movies = await res.data;
    
        console.log(movies);
    this.setState({ movies, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
      };

    get renderMovies() {
    let movies = <h3>Loading Medicine Details...</h3>;
    if (this.state.movies) {
        movies = <Movies list={this.state.movies} />;
    }

    return movies;
    }
    render() {
        return (
            <div className="medicineList">
            <div className="medicineList__search">
                <input type="text" placeholder="Search for Medicine, Uses, Therapy"
                 onChange={e => this.onChangeHandler(e)} 
                />
                <SearchRoundedIcon/>
            </div>
            <div className="medicineList__data">
                <div className="medicineList__data__header">
                    <h1>Medicine List</h1>
                </div>
                {this.renderMovies}
                </div>
        </div>
        );
            }}

export default MedicineList;
        

        //   {/* <div>
        //     <input
        //       value={this.state.value}
        //       onChange={e => this.onChangeHandler(e)}
        //       placeholder="Type something to search"
        //     />
        //     {this.renderMovies}
        //   </div> */}
    

// function MedicineList() {
    
    // const [medicine,setmedicine] = useState(null);
    // const apiUrl  = 'https://serene-falls-13179.herokuapp.com/medicine';

    // useEffect(()=>{
    //     fetch(apiUrl)
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         console.log(data.generic_name);
    //         setmedicine(data)
    //     })
    // },[]);
    
  
    // const [ searchTerm, setSearchTerm] = useState("");

    // return (
    //     <div className="medicineList">
    //         <h3>Search for medicine, symptoms, therapy ...</h3>
    //         <div className="medicineList__search">
    //             <input type="text" placeholder="search"
    //              onChange={(event)=>{
    //             setSearchTerm(event.target.value)}} 
    //             />
    //             <SearchRoundedIcon/>
    //         </div>
    //         <div className="medicineList__data">
    //             <h2>Medicine List</h2>
    //             <hr />
                // {/* {medicine && medicine.filter((val)=> {
                //     console.log(val.therapy);
                //     if(searchTerm === ""){
                //         return val;
                //     }
                //     else if(val.generic_name.toLowerCase().includes(searchTerm.toLowerCase()))
                //             {
                //             return val; 
                //         }return null;
                // }).map((medicine,index)=>{ 
                //     return(
                //     <div className="medicineList__data__loop" key={index}>
                //                     <div className="medicine_details">
                //                         <h3>MRP:{medicine.mrp}</h3>
                //                         <h3>Units:{medicine.units}</h3>
                //                     </div>
                //                     <div className="medicine_name">
                //                         <h2>{medicine.generic_name}</h2>
                //                     </div>
                //     </div>
                // )}
                // )} */}
//                 {medicine &&
//                     medicine.map((medicine,index)=>{
//                         return(
//                                 <div className="medicineList__data__loop" key={index}>
//                                     <div className="medicine_details">
//                                         <h3>MRP:{medicine.mrp}</h3>
//                                         <h3>Units:{medicine.units}</h3>
//                                     </div>
//                                     <div className="medicine_name">
//                                         <h2>{medicine.generic_name}</h2>
//                                     </div>
//                                 </div>
//                         )
//                       })
//                 }
//             </div>
//         </div>

//     )
// }

// export default MedicineList
