import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-primary">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default AppLayout;
