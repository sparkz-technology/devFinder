import {FaGithubAlt} from 'react-icons/fa';
import NavLink from '../ui/NavLink';
import { useNavigate } from 'react-router-dom';
const Navbar: React.FC = () => {
  const navigate =useNavigate()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
        <FaGithubAlt className="text-white text-2xl"/>
        <h1 className=" text-white text-2xl font-bold cursor-pointer" onClick={() => navigate(`/`)} >
            DevFinder
        </h1>
        </div>
        <ul className="flex">
            <li>
                <NavLink to="/about" >About</NavLink>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;