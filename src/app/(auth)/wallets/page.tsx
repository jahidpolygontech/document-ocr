import { get } from "@/api";
import { WalletData } from "@/types/WalletsDataTypes";
import WalletCards from "./components/WalletCards";


const Page = async () => {
  const walletData = await get<WalletData>("/api/vdb/v1/service/2");
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full mt-6">
          <WalletCards walletsData={walletData}/>
        </div>
      </div>
    </div>

    
  );
};

export default Page;
