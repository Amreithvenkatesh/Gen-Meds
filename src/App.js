import Navbar from './Navbar';
import './App.css';
import Body from './Body';
import Locate from './Locate';
import SignIn from './SignIn';
import Register from './Register';
import MedicineList from './MedicineList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
        <Body />  
      </Route>
      <Route exact path="/search">
          <MedicineList /> 
      </Route>
      <Route exact path="/locateStore">
          <Locate /> 
      </Route>
      </Switch>
      {/* footer */}
    </div>
    </Router>
  );
}

export default App;
