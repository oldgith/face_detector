const Rank=({name,entries})=>{
    console.log(entries)
    return (
        <div>
            <div>
           <p className='f2'>{`${name} ,ur  Current search count is ... ${entries}`} </p>        
            </div>
         
        </div>
    );

}
export default Rank;