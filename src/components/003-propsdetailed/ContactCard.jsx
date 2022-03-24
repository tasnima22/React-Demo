const ContactCard = (props) => {

    const {name, email, age, isCute, favFood, image} = props;

    return ( 
        <div>
            <h2>Animal name: {name}</h2>
            <h3>Contact Email:{email}</h3>
            <h3>Animal age: {age}</h3>
            <h3>Is the animal cute: {isCute.toString()}</h3>
            {/* <h3>Animal favourite food: {favFood}</h3> */}
            <ul>
            {/* When using .map key is the index number, so it is a numerical identifier number */}
            {favFood.map((food, key) => {
                return <li> Food {key + 1}: {food} </li>
            })}
            </ul>
            <img src= {image}/>
        </div>
     );
}
 
export default ContactCard;