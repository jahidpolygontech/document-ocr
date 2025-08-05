import { get } from "@/api";
import { UtilitiesData } from "@/types/UtilitiesDatatTypes";
import Utilitiescards from "./components/Utilitiescards";


const Page = async () => {
  const utilitiesData = await get<UtilitiesData>("/api/vdb/v1/service/4");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <Utilitiescards utilitiesData={utilitiesData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
