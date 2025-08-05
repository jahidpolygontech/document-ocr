// app/banks/[id]/page.tsx
import { get } from "@/api";
import BankCards from "../components/BankCards";
import { BankData } from "@/types/BankDatatTypes";

interface PageProps {
  params: Promise<{ id: string }>;
}

const BankDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  let bankData: BankData | null = null;

  try {
    bankData = await get<BankData>(`/api/vdb/v1/service/${id}`);
  } catch (error) {
    console.error("Failed to fetch bank services", error);
  }

  if (!bankData) {
    return <p className="text-center mt-10">Bank services not found.</p>;
  }

  return (
    <section className="px-6 mt-6">
      <h1 className="text-2xl font-bold mb-6">{bankData.serviceCategoryName}</h1>
      <BankCards banksData={bankData} />
    </section>
  );
};

export default BankDetailsPage;
