import { toast } from "sonner";
import { getLoggedUser } from "@/services/LoggedUserClient";

export async function getIframeUrl(): Promise<string | null> {
  const loggedUser = getLoggedUser();

  try {
    const requestData = {
      master_email:process.env.NEXT_PUBLIC_MASTER_EMAIL,
      master_password: process.env.NEXT_PUBLIC_MASTER_PASSWORD,
      first_name: loggedUser?.name,
      last_name: loggedUser?.name,
      email: loggedUser?.email,
      phone: loggedUser?.phone?.slice(2),
      gender: loggedUser?.gender,
      address: loggedUser?.address || "Dhaka",
      type: "own",
      commission_type: "percentage",
      payment_term: "per_booking",
      commission_amount: 50,
    };

    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
 
    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "SSO login failed");
    }

    const token = data?.data?.token;
    if (!token) throw new Error("Missing token");

    return `${process.env.NEXT_PUBLIC_REDIRECT_URL}?token=${token}`;
  } catch (error) {
    console.error("SSO login failed:", error);
    toast.error("SSO login failed.");
    return null;
  }
}
