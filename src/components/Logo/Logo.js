import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'
const Logo=()=>{
    return (
        <div>
         <Tilt className="Tilt br2 shadow-2 ma3" options={{ max : 30 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner pa4"> 
 <img src={brain} alt="logo" className="" /> </div>
      </Tilt>   
 </div>
    );

}
export default Logo;