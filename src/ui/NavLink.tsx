import { NavLink as Link } from "react-router-dom";
import { ReactNode } from "react";

type Props = {
  to: string; // Adding the 'to' prop to the Props type
  children: ReactNode;
};

const NavLink: React.FC<Props> = (props) => {
  return (
    <Link to={props.to} className="block mt-0 lg:inline-block text-white hover:text-white text-base first-letterfirst-line flex-grow text-center">
      {props.children}
    </Link>
  );
};

export default NavLink;
