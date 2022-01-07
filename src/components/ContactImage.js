function ContactImage(props) {
    const { image } = props;
    return (
        <img src={image.medium} alt='' />
    );
}
export default ContactImage;