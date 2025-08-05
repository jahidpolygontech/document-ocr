import { get } from "@/api";
import { InsuranceData } from "@/types/InsuranceDataTypes";
import InsuranceCards from "./components/InsuranceCards";



const Page = async () => {
  const insuranceData = await get<InsuranceData>("/api/vdb/v1/service/5");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <InsuranceCards insuranceData={insuranceData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
