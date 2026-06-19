import axiosClient from "@/api/axiosClient";

export async function getBillingCheckoutUrl() {
  return axiosClient.get<{ url: string }>("/billing/checkout");
}
