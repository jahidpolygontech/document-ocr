"use server";

import { post } from "@/api/ApiClient";

export async function recordServiceClick(serviceId: number, agentId: number) {
  try {
    return await post("/api/vdb/v1/service-click-log", {
      serviceId,
      agentId
    });
  } catch (error) {
    console.error("Failed to record service click:", error);
  }
} 