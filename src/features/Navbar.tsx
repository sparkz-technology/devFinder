const Navbar: React.FC = () => {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <ul className="flex">
            <li>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Docs
                </a>
            </li>
            <li>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Examples
                </a>
            </li>
            <li>
                <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Blog
                </a>
            </li>
        </ul>
    </nav>
        
    </>
  );
};

export default Navbar;