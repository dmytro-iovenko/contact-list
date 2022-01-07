import Main from "./Main";

function Layout(props) {
    const { contacts } = props;
    return (
        <div className="frame">
            <Main contacts={contacts} />
        </div>
    );
}
export default Layout;