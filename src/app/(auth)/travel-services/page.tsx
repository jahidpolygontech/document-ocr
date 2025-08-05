import { get } from "@/api";
import { TravelServiceData } from "@/types/TravelDataTypes";
import TravelServicesCards from "./components/Travelservicescards";

const Page = async () => {
  const travelData = await get<TravelServiceData>("/api/vdb/v1/service/6");
  
  return (
    <div className="flex flex-col w-full mt-6">
      <TravelServicesCards travelData={travelData} />
    </div>
  );
};

export default Page;
