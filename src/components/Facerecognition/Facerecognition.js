import './Facerecognition.css'
const Facerecognition=({box,imageUrl})=>{
    return (
        <div className="center ma">
            <div className="absolute mt2 ">
             <img alt ='' id="inputImage"
            src={imageUrl} width="500px" height="auto" />
            <div 
            className="bounding-box" 
            style={{left:box.leftcol ,bottom:box.bottomrow,top:box.toprow,right:box.rightcol }}
            ></div>     
            </div>
          
        </div>
    );

}
export default Facerecognition;