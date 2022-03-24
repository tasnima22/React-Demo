import { useState } from "react";
import StateButton from "./StateButton";
import Counter from "./Counter";

const StateManager = () => {
    
    const [total, setTotal] = useState(10);
    const updateTotal = () => {
        setTotal(total - 1);
    }
    return ( 
        <>
        
        <StateButton updateTotal={updateTotal}/>
        <Counter total={total}/>
        </>

        
     );
}
 
export default StateManager;