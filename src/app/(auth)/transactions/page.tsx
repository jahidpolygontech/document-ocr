import Transactioncard from "./components/Transactioncard";

const Page = () => {
  
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-6">
          <Transactioncard />
        </div>
      </div>
    </div>
  );
};

export default Page;
