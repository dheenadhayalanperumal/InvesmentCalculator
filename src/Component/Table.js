import React from "react";
import './Table1.css';
const Table=(probs)=>{
    
    
    return(
        <>
        <h2>The table listed below provides the interest and every year final Amount</h2>
        <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Save</th>
                <th>interest</th>
                <th>Year End Saving</th>
            </tr>
            </thead>
            <tbody>
            {probs.tableData.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{item.totalsave}</td>
            <td>{item.totalinterst}</td>
            <td>{item.finaloutcome}</td>
           
          </tr>
          
        ))}
            </tbody>
        </table>

        <h3>{probs.returnData} Years after Your Total Saving Amount is: {probs.outputFinal}</h3>
        </>
    )
}
export default Table;