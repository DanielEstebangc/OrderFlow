import Header from "./Header/Header";
import Main from "./Main/Main";
import "./Layout.css";

export default function Layout() {
    return (
        <div className="layout">
            <div className="inner-container">
                <Header />
                <Main />
            </div>
        </div>
    );
}