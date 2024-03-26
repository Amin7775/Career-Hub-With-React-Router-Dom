import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './../../font.css'

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen manrope">
            <Header></Header>
            <div className="flex-1">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;