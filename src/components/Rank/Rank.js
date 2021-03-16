const Rank=({name,entries})=>{
    console.log(entries)
    return (
        <div>
            <div>
           <p className='f2'>{`${name} ,ur  Current Rank is ... ${entries}`} </p>        
            </div>
         
        </div>
    );

}
export default Rank;