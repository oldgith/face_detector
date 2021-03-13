


const Navigation=({onRouteChange,isSignedin})=>{
    return (
        <div className="flex justify-end">
   {
       isSignedin==='true'?
   <p onClick={()=>onRouteChange('signin')}
   className="link pa3 f3 Courier underline pointer dim ">
     Sign out </p>   
     :
     <nav className="center">
      <p onClick={()=>onRouteChange('signup')}
     className="link pa3 f3 Courier underline pointer dim ">
       Sign up </p> 
       <p onClick={()=>onRouteChange('signin')}
       className="link pa3 f3 Courier underline pointer dim ">
         Sign in </p>      
     </nav>
    
     
     
     
  
  
  }
   
        </div>
    );

}
export default Navigation;