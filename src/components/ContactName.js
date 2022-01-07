function ContactName(props) {
    const { name } = props;
    return (
        <h1>{name.first} {name.last}</h1>
    );
}
export default ContactName;