import React,{useState} from 'react';
import Calculation from './Component/Calculation';
import './App.css';
import Table from './Component/Table';

function App() {
const [finalValue,setFinalValue]=useState(null);
const[finalReturn,setFinalReturn]=useState(null);
const[finaloutputreturn,setFinaloutputreturn]=useState(null);

  var calDetails;
  const calculationData=(data)=>{
//console.log(data);
calDetails=data;
var dataCal=[];
var totalsavings=parseInt(calDetails.currSaving);
var finalinterest=0;
for(let i=1; i<=calDetails.currduration;i++){
  //console.log(i); 
  totalsavings=totalsavings+parseInt(calDetails.currPrincipal)+parseInt(finalinterest);
  finalinterest=(parseInt(totalsavings)*parseInt(calDetails.currinterest))/100;
 let finalamount=totalsavings+finalinterest;
  dataCal.push(
    {
      year:i,
      totalsave:totalsavings,
      totalinterst:finalinterest,
      finaloutcome:finalamount
    }
  )
  setFinaloutputreturn(finalamount);
 }
//console.log(dataCal);
setFinalValue(dataCal);
setFinalReturn(calDetails.currduration);
  }

  return (
    <div className="App">
      <Calculation investData={calculationData} />
      {finalValue && <Table tableData={finalValue} returnData={finalReturn} outputFinal={finaloutputreturn}/>}
      
    </div>
  );
}

export default App;
