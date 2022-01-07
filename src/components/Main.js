import Contact from "./Contact";

function Main(props) {
    const { contacts } = props;
    return (
        <div className="content">
            {contacts.results.map((result, index) => <Contact contact={result} key={index} />)}
        </div>
    );
}
export default Main;