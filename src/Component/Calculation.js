import React,{useState} from "react";
import './Calculation.css';
const Calculation=(probs)=>{
const [initial, setInitial]=useState(null);
const [principal, setPrincipal]=useState(null);
const [interest, setInterest]=useState(null);
const [duration,setDuration]=useState(null);



const handleInputChange1=(event)=>{
setInitial(event.target.value);
//console.log(initial);
}
const handleInputChange2=(event)=>{
    setPrincipal(event.target.value);
    }
    const handleInputChange3=(event)=>{
        setInterest(event.target.value);
        
        }
        const handleInputChange4=(event)=>{
            setDuration(event.target.value);
            
            }
        const displayData=(event)=>{
            event.preventDefault();
            var data={
                currSaving:initial,
                currPrincipal:principal,
                currinterest:interest,
                currduration:duration
            };
            probs.investData(data);

            //console.log(data);
            setInitial('');
            setPrincipal('');
            setInterest('');
            setDuration('');
        }
        



    return(
        <>
        <h1>Saving Account Interest Calculator</h1>
        <div className="formbox">
        <form onSubmit={displayData}>
            <label>Current savings amount</label>
         
            <div className="input-wrapper">
            <input type="number" value={initial} onChange={handleInputChange1} placeholder="enter the current saving amount" ></input>
            </div>
           
            <label>Yearly Savings Amount</label>
            
            <div className="input-wrapper">
            <input type="number" value={principal} onChange={handleInputChange2} placeholder="enter the Yearly Savings Amount"></input>
            </div>
           
            <label>Yearly Interest</label>
            <div className="input-wrapper">
            <input type="number" value={interest} onChange={handleInputChange3} placeholder="enter the Interest"></input>
            
            </div>
            <label>Saving Duration</label>
            <div className="input-wrapper">
            <input type="number" value={duration} onChange={handleInputChange4} placeholder="enter the Duration"></input>
            
            </div>
            <button type="submit">submit</button>

        </form>
        </div>
      
        </>
    )
}
export default Calculation;