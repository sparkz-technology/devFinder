import { NavLink as Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const NavLink: React.FC<Props> = (props) => {
  return (
    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white text-base first-letterfirst-line:
    flex-grow text-center ">
      {props.children}
    </Link>
  );
};

export default NavLink;
