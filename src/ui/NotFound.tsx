
const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg mb-4">Page not found</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go back home
            </button>
        </div>
    );
};

export default NotFound;
