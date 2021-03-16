import { Component } from 'react';
import './App.css';
import './components/Navigation/Navigation';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';

import Facerecognition from './components/Facerecognition/Facerecognition'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'



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

const intialState={
  input:'',
  box:{},
  route:'signin',
  isSignedin:'false',
  user:{
    id:'',
    name:'',
    email:'',
    entries:0,
    joined:''

  }

}

  class App extends Component {
        constructor(){
          super();
          this.state={intialState }
      }

    loadUser=(user)=>{
      this.setState({user:{ 
        id:user.id,
      name:user.name,
      email:user.email,
      entries:user.entries,
      joined:user.joined}})

    }

        calculateFaceLocation=(data)=>{
          // console.log("resp :",data.outputs[0].data.regions[0].region_info.bounding_box);
          const tempBox=data.outputs[0].data.regions[0].region_info.bounding_box;
         const image= document.getElementById("inputImage");
         const width=Number(image.width);
         const height=Number(image.height);
        //  console.log(`leftcor is ${tempBox.left_col*width}, rightcor is ${tempBox.right_col*width}  `)
          return {
            
            leftcol:tempBox.left_col*width,
            rightcol:width-(tempBox.right_col*width),
            toprow:tempBox.top_row*height,
            bottomrow:height-(tempBox.bottom_row*height)
          } 
        }
          
        updateBox=(box)=>{
          this.setState({box:box})
          // console.log(this.state.box)
        } 
       
         onInputChange=(event)=>{
          this.setState({input:event.target.value});
          }


     onSubmit=()=>{
            console.log("click");
  this.setState({imageUrl:this.state.input})
        fetch("http://localhost:3001/imageUrl",{
              method:'post',
              headers:{'Content-Type':"application/json"},
              body:JSON.stringify({
                  input:this.state.input,
              })  
          })
          .then(res=>res.json())
          .then(response=>{
            if(response){
               fetch("http://localhost:3001/image",{
                method:'put',
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({
                    id:this.state.user.id,
                })
            }).then(response=>response.json())
            .then(count=>{
              this.setState(Object.assign(this.state.user,{entries:count}))
            })
            .catch(err=> console.log("ooops err"))
            this.updateBox(this.calculateFaceLocation(response))
            } 
          })
          .catch(err=> console.log("err in getting info from imageUrl"))
          
     }     
            
         
           


 onRouteChange=(cur_route)=>{
      if(cur_route==='home'){  
        this.setState({isSignedin:"true"})
       }
      else {  this.setState(intialState)  }
   this.setState({route:cur_route});
    }

  render(){
  return (
    <div className="App">
      
     <Particles className="particle" param={particleOptions} />
     <Navigation onRouteChange={this.onRouteChange} isSignedin={this.state.isSignedin}/>
     { this.state.route==='home'?
   <div>
     <Logo/>
     <Rank  name={this.state.user.name} entries={this.state.user.entries} />
     <ImageLinkForm  InputChange={this.onInputChange} Submit={this.onSubmit}/>
     <Facerecognition  box={this.state.box} imageUrl={this.state.input}/>
   </div>
      :
       ( this.state.route==='signin'?
        <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        :
        <Signup onRouteChange={this.onRouteChange} loadUser={this.loadUser} />   
        )
         
     
  }
  </div>
  );  
 
}
  
}

export default App;
