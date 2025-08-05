// components/common/NoData.tsx
const NoData = ({ message = "No data available." }: { message?: string }) => {
    return (
      <div className="py-12 px-6 md:px-12">
        <p className="text-center text-lg font-medium text-gray-500">{message}</p>
      </div>
    );
  };
  
  export default NoData;
  