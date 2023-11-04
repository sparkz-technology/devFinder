import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import SearchBox from "../components/SearchBox";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-secondary relative">
            <Navbar />
            <SearchBox />
            <Profile />
            <Footer />
        </div>
    );
};

export default AppLayout;
