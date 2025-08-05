"use server";

import { patch, post } from "@/api/ApiClient";
import { callGuardedApi } from "@/api";

interface ChangePasswordData {
  password: string;
}

const changePassword = async (formData: ChangePasswordData) => {
  return await callGuardedApi(async () => {
    await post("/api/vdb/v1/user/change-password", formData);
  });
};

export default changePassword;
