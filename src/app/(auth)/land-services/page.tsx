import { get } from "@/api";
import { LandData } from "@/types/LandTypes";
import Landservicecards from "./components/Landservicecards";



const Page = async () => {
  const landData = await get<LandData>("/api/vdb/v1/service/10");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <Landservicecards landData={landData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
