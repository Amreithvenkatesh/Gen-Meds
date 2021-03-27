import Navbar from './Navbar';
import './App.css';
import Body from './Body';
import Locate from './Locate';
import SignIn from './SignIn';
import Register from './Register';
import UpdateMed from './UpdateMed';
import MedicineInfo from './MedicineInfo';
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
          <MedicineInfo /> 
      </Route>
      <Route exact path="/locateStore">
          <Locate /> 
      </Route>
      <Route exact path="/signIn">
          <SignIn /> 
      </Route>
      <Route exact path="/register">
          <Register /> 
      </Route>
      <Route exact path="/updateMed">
          <UpdateMed /> 
      </Route>
      </Switch>
      {/* footer */}
    </div>
    </Router>
  );
}

export default App;
