import { get } from "@/api";
import { MedicalData } from "@/types/MedicalDataTypes";
import Medicalservicescards from "./components/Medicalservicescards";



const Page = async () => {
  const medicalData = await get<MedicalData>("/api/vdb/v1/service/7");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <Medicalservicescards medicalData={medicalData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
