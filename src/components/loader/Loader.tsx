const Loading = ({ message = "Loading..." }: { message?: string }) => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500 border-solid mx-auto mb-4" />
          <p className="text-lg text-gray-600">{message}</p>
        </div>
      </div>
    );
  };
  
  export default Loading;