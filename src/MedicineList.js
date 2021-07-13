import React,{Component} from 'react';
import './MedicineList.css'
import Movies from './movies';
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
        

