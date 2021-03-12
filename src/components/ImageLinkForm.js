const ImageLinkForm=()=>{
    return (
        <div>
            <p className="f3">Put in the url of your image here to detect the faces</p>
          <div className="center">
  <div className="center pa4 br3 shadow-5">
   <input className="w-70 pa2 f4 "placeholder="Drop url of your image"type="text"/>
               <button className="w-30 grow link mid-gray bg-washed-red pv2">Detect </button>
               </div> 
          </div>
                 

        </div>
    );

}
export default ImageLinkForm;