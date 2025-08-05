import { get } from "@/api";
import { GovernmentServiceData } from "@/types/GovernmentDataTypes";
import GovernmentServicescards from "./components/GovernmentServicescards";



const Page = async () => {
  const governmentserviceData = await get<GovernmentServiceData>("/api/vdb/v1/service/8");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <GovernmentServicescards governmentServiceData={governmentserviceData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
