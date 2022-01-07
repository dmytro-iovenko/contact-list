import Main from "./Main";

function Layout(props) {
    const { contacts } = props;
    return (
        <div>
            <Main contacts={contacts} />
        </div>
    );
}
export default Layout;