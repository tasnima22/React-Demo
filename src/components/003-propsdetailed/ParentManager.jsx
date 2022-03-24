import ContactCard from "./ContactCard";
import ContactCardManager from "./ContactCardManager";

const AnimalArray = [
    {
        name: "Rabbit",
        email: "example-email@qa.com",
        age: 2,
        isCute: true,
        favFood: ["carrots","chicken", "brocoli"],
        image: "https://i.pinimg.com/736x/02/07/b6/0207b6b5817da1984c2f08693122f32e.jpg"
    },
    {
        name: "Puppy",
        email: "example-email1@qa.com",
        age: 5,
        isCute: true,
        favFood: ["beans", "stick"],
        image: "https://wallpaperaccess.com/full/390975.jpg"
    }

]

const ParentManager = () => {
    return (
        <div>
            <ContactCard name="Rabbit" email="example-email@qa.com" age={2} isCute={true} favFood="carrots" image="https://i.pinimg.com/736x/02/07/b6/0207b6b5817da1984c2f08693122f32e.jpg"/>
            <br></br>
            <br></br>

            <ContactCardManager data={AnimalArray}/>
        </div>
      );
};
 
export default ParentManager;