import { get } from "@/api";
import ClientIframeWrapper from "@/components/Framer/ClientIframeWrapper";
import { UtilitiesService } from "@/types/UtilitiesDatatTypes";

interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  let serverUrl: string | null = null;

  try {
    const data = await get<UtilitiesService>(`/api/vdb/v1/service-details/${id}`);
    serverUrl = data?.serviceUrl || null;
  } catch (e) {
    console.error("API fetch failed", e);
  }

  return <ClientIframeWrapper id={id} fallbackUrl={serverUrl} />;
};

export default Page;
