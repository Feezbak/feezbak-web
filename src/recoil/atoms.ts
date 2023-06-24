import { atom } from "recoil";
import { userDefaultData } from "@/constants";

export const userData = atom({
  key: "userData",
  default: userDefaultData,
});
