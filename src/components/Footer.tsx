import { useSelector } from "react-redux";
import { RootState } from "../Store";

const Footer: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.user);

  const footerStyle: React.CSSProperties = {
    position: !data ? "fixed" : "relative",
    bottom: !data ? "0" : "auto",

  };

  return (
    <footer
      className="flex justify-center items-center h-16 bg-primary text-white w-full fixed bottom-0"
      style={footerStyle}
    >
      <p className="text-center text-sm text-gray-400">
        Made with ❤️ by {"sutharsan"}
      </p>
    </footer>
  );
};

export default Footer;
