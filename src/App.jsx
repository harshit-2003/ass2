import React, { useState } from "react";

// function App(){

// let curDate= new Date(2022,5,5, 20);
// curDate=curDate.getHours();
// let greeting="";
// const cssStyle={};

// if(curDate>=1 && curDate<12){
//     greeting="Good Morning"
//     cssStyle.color="Green"
//   }
//   else if(curDate>=12 && curDate<19){
//     greeting="Good Afternoon"
//     cssStyle.color="Red"
//   }
//   else{
//     greeting="Good Night"
//     cssStyle.color="Blue"
//   }


// return(
//   <div1>
//   <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
//   </div1>
// );

// }

const App =() =>{

const [inputs, setInputs] = useState({});
// const [name, setName] = useState("");
// const [fullName, setFullName] = useState();


const inputEvent=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
};

const Submits = (event) =>{
    event.preventDefault();
    console.log(inputs);
};

    return(
    <div className="main-div">
    <form onSubmit={Submits}> 
    <div>
        
        <input type="text" placeholder="Enter your name" 
        defaultValue={inputs.name || ""} 
        onChange={inputEvent} /> 

        <input type="text" placeholder="Enter your age" 
        onChange={inputEvent}
        defaultValue={inputs.age || ""} /> 
       
        <button className="b1" type="submit"> Submit </button> 
        <br></br>
        <button type="submit"> Submit </button>
    </div>
    </form>
    </div>
    
    );
};

export default App;
