import { get } from "@/api";
import ClientIframeWrapper from "@/components/Framer/ClientIframeWrapper";
import { BankService } from "@/types/BankDatatTypes";

interface PageProps {
  params: Promise<{ id: string }>;
}



const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  let serviceData: BankService | null = null;

  try {
    serviceData = await get<BankService>(`/api/vdb/v1/service-details/${id}`);
  } catch (e) {
    console.error("API fetch failed:", e);
  }

  const serviceUrl = serviceData?.serviceUrl || null;

  return (
    <ClientIframeWrapper id={id} fallbackUrl={serviceUrl} />
  );
};

export default Page;
