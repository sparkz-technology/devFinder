const Loading: React.FC = () => {
    return (
      <div className="flex justify-center items-center  absolute top-1.5 right-1.5 ">
        <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-cyan-500"></div>
      </div>)
  }
export default Loading;  