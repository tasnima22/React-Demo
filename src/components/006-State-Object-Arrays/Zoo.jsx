import { useState } from "react";

const Zoo = () => {

    const[zooData, setZooData] = useState({});

    let zooObj= {
        animal: "",
        age:"",
        cute: false
    }

    const setStateFromObj = () => {
        setZooData(zooObj);
    }
    return ( 
        <>
        <form>
                <input type="text" name="Animal" placeholder="Enter Animal" onChange={(event) => {zooObj.animal = event.target.value}}/>
                <input type="number" name="Age" placeholder="Enter Age of Animal" onChange={(event) => {zooObj.age= event.target.value}}/>
                <input type="radio" name="Cute" onChange={() => zooObj.cute= true}/>
                <span> True </span>
                <input type="radio" name="Cute" onChange={() => zooObj.cute = false}/>
                <span> False </span>
                <button type="button" onClick={setStateFromObj}>Click to enter data</button>
        </form>

        <h2>Animal: {zooData.animal}</h2>
        <h2>Age: {zooData.age}</h2>
        <h2>Is the animal cute: {zooData.cute}</h2>
        </>
     );
}
 
export default Zoo;