import logo from './logo.svg';
import './App.css';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import InfoCard from './components/infoCard/index.jsx';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <InfoCard />
          </div>
          <div className="col-3">
            <InfoCard />
          </div>
          <div className="col-3">
            <InfoCard />
          </div>
        </div>
      </div>

      <InfoCard />
    </div>
  );
}

export default App;




