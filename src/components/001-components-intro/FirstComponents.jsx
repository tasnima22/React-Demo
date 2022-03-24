const FirstComponent = () => {

    const name = "Tasnima";
    const favColour = "Green"; 
    const favNumber = "24";

    // Within a Component the only thing that this renders is what it returns
    // A component can only ever return one HTML element
    // Surrounding your elements in a <div> means its only one element 
    // The other solution is <> react fragment, div hell 
    return(
        <>
            <h1> Changing this component </h1>
            <h3> New sub header </h3>
            {/* By using {} we are seamlessly adding our JS to our HTML return */}
            <h2> My name is {name} </h2>
            <h3> My favourite colour is {favColour} </h3>
            <h3> My favourite number is {favNumber} </h3>
            <img src= "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" alt="description" width="300px"/>
            <h3> My favourite fruits are </h3>
            <ol>
                <li> Raspberry </li>
                <li> Strawberry </li>
                <li> Blackberry </li>
                <li> Lychee </li>
            </ol>
        </>
    )

}

// Export our component as a module, similar to within node 
export default FirstComponent;