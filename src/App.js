import { Component } from 'react';
import './App.css';
import './components/Navigation/Navigation';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Facerecognition from './components/Facerecognition/Facerecognition'

const app = new Clarifai.App({
 apiKey: 'bb95049e7de545de91b24a3e1b272a7a'
});



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
        constructor(){
          super();
          this.state={
            input:'',
            box:{}
          }
      }

        calculateFaceLocation=(data)=>{
          console.log("resp :",data.outputs[0].data.regions[0].region_info.bounding_box);
          const tempBox=data.outputs[0].data.regions[0].region_info.bounding_box;
         const image= document.getElementById("inputImage");
         const width=Number(image.width);
         const height=Number(image.height);
         console.log(`leftcor is ${tempBox.left_col*width}, rightcor is ${tempBox.right_col*width}  `)
          return {
            
            leftcol:tempBox.left_col*width,
            rightcol:width-(tempBox.right_col*width),
            toprow:tempBox.top_row*height,
            bottomrow:height-(tempBox.bottom_row*height)
          } 
        }
          
        updateBox=(box)=>{
          this.setState({box:box})
          console.log(this.state.box)
        } 
       
         onInputChange=(event)=>{
          this.setState({input:event.target.value});
          }


          onSubmit=()=>{
            console.log("click");

            app.models.predict(Clarifai.FACE_DETECT_MODEL, `${this.state.input}`)
            .then(response =>this.updateBox(this.calculateFaceLocation(response)))
              
            .catch(err=> console.log("ooops err"))
            console.log(this.state.box);
           }


  render(){
  return (
    <div className="App">
          <Particles className="particle"
            param={particleOptions} />
     <Navigation/>
     <Logo/>
     <Rank/>
     <ImageLinkForm  InputChange={this.onInputChange} Submit={this.onSubmit}/>
     <Facerecognition  box={this.state.box} imageUrl={this.state.input}/>

    </div>
  );  
 
}
  
}

export default App;
