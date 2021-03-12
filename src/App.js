import { Component } from 'react';
import './App.css';
import './components/Navigation/Navigation';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';

const particleOptions={
  particles: {
    number: {
        value: 30,
        density:{
      enable:true,
      value_area:800
        }
    }
}
}


class App extends Component {
  render(){
  return (
    <div className="App">
          <Particles className="particle"
            param={particleOptions} />
     <Navigation/>
     <Logo/>
     <Rank/>
     <ImageLinkForm/>

    </div>
  );  
 
}
  
}

export default App;
