// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

//  function App() {
//    return(
//   <>
//   <Heading/>
//   <Para/>
//   <List/>
//   <Para/>
//  </>
//   );
//  }
//  export default App;



// formation greeting word 

import React from "react";
import ReactDOM from "react-dom";
import './index.css';

let curDate=new Date(2021,6,2,20);
curDate=curDate.getHours();

let greeting=" ";
const cssStyle = {};

if (curDate >=1 && curDate <12)
{
  greeting="Good Morning";
  cssStyle.color="green";
}
else if(curDate>=12 && curDate < 19)
{
  greeting="Good Afternoon";
  cssStyle.color="pink";
}
else{
  greeting="Good Night";
  cssStyle.color="yellow";
}



// ReactDOM.render(
//   <>
//   <div>
//   <h1>
//   Hello Sir ,<span style={cssStyle}>{greeting}</span>
//   </h1>
//   </div>

//  </>,
//  document.getElementById("root")
 
// );


// import React from 'react';
// import ReactDOM from 'react-dom';



// function App(){

//  let curDate=new Date(2021,6,2,20);
// curDate=curDate.getHours();

// let greeting =" ";
// const cssStyle = {};

// if (curDate >=1 && curDate <12)
// {
//   greeting="Good Morning";
//   cssStyle.color="green";
// }
// else if(curDate>=12 && curDate < 19)
// {
//   greeting="Good Afternoon";
//   cssStyle.color="pink";
// }
// else{
//   greeting="Good Night";
//   cssStyle.color="yellow";
// }



// return(
 
//   <>
//   <div>
//   <h1>
//   Hello Sir ,<span style={cssStyle}>{greeting}</span>
//   </h1>
//   </div>

//  </>

//    );
// }
// export default App;

// const teacher="Prashant Dhawan";
// const favprog="ReactJs";
// function myName(){
//     let name="Umesh";
//     return;
    
// }

// function myNames(){
//    let name="Rohan";
//     return;
// }
// export default teacher;
// export {favprog,myName,myNames};



// FOR CALCULATOR APP

// import React from "react";
import {add,sub ,mult,div} from "./Calc";


function App(){
 return (
    <>
    <ul>
        <li>The sum of two no is {add(200,4)}</li>
        <li>The sub of two no is{sub(200,4)}</li>
        <li>The mult of two no is{mult(200,4)}</li>
        <li>The div of two no is {div(200,3)}</li>
    </ul>

    </>
    

 );
}
export default App;





    
