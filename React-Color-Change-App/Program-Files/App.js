import { useState } from "react";
import './App.css'


function App(){
  return(
    <>
    <TogglerChange></TogglerChange>
    </>
  );
 
 function TogglerChange(){
    let [colorname,setColorname]=useState("Enter a Value");
    let [toggleValue,setToggleValue]=useState("black");
   
    function handel(){
      let i;
       if(toggleValue==="black"){
          i=0;
       }
       else{
        i=1
       }
        let togglearr=["white","black"];
        setToggleValue(togglearr[i])
       
        
     }
    return(
      <>
       <input id="search" type="text" placeholder="Add Color Name" onChange={(e)=>{setColorname(e.target.value) }}/>
       <button id="toggle" onClick={handel}>Toggle Text Color</button>
       <Colorbackground colorname={colorname} toggleValue={toggleValue}></Colorbackground>
      </>
    );
  }
  function Colorbackground({colorname,toggleValue}){
  
    
   

    
   const style={
     color:toggleValue,
     backgroundColor:colorname,
     
   }
     return(
       <>
       <div id="colorchange" style={style}>
        {colorname}
        
        </div>

       </>
     );
   }
  
  }



export default App;