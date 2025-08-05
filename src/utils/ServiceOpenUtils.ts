import { ServiceOpenType } from "@/types/ServiceOpenType";

export function getOpenType(type: ServiceOpenType): "new_tab" | "none" | "" {
  switch (type) {
    case "SIMPLE_MICROSITE":
      return "new_tab";
    case "SSO_LOGIN":
      return "none";
    default:
      return "";
  }
}

