import ContactName from "./ContactName";
import ContactImage from "./ContactImage";

function Contact(props) {
    const { contact } = props;
    return (
        <div className="contact">
            <div className="contact-img">
                <ContactImage image={contact.picture} />
            </div>
            <div className="contact-info">
                <ContactName name={contact.name} />
                <p>Home: {contact.phone}</p>
                <p>Mobile: {contact.cell}</p>
            </div>
            <div className="contact-more">
                &gt;
            </div>
        </div>
    );
}
export default Contact;