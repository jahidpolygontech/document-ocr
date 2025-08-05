import { get } from "@/api";
import SocialSafetycards from "./components/SocialSafetycards";
import { SocialData } from "@/types/SocialSafetyTypes";



const Page = async () => {
  const socialData = await get<SocialData>("/api/vdb/v1/service/9");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <SocialSafetycards socialData={socialData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
