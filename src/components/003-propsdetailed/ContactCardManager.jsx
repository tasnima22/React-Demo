import ContactCard from "./ContactCard";

const ContactCardManager = ({data}) => {
    return ( 
        <>
        <h2> Contact Card Manager </h2>

        {data.map((contactcard) => {
            return (
                <>
                <ContactCard name={contactcard.name} email={contactcard.email} age={contactcard.age} isCute={contactcard.isCute} favFood={contactcard.favFood} image={contactcard.image}/>
                </>
            );
        }
        )
    }

        </>
     );
}
 
export default ContactCardManager;