
"use server";

import { post } from "@/api/ApiClient";
import {callGuardedApi} from "@/api";
import AuthManager from "@/services/AuthManager";
import { LoggedInUser } from "@/types/User";

const credentialsLogin = async (phoneNumber : string , password:string) => {
  await AuthManager.logout();
  const formattedPhoneNumber = `88${phoneNumber}`;

  return callGuardedApi<LoggedInUser>(async () => {
    const res =  await post<LoggedInUser>("/api/vdb/v1/auth/login-auth-phone", { 
      phoneNumber: formattedPhoneNumber,
      password 
    });
    await AuthManager.login(res);
  });
};

export default credentialsLogin;
