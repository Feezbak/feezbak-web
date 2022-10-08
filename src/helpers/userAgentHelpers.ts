import UAParser, { IBrowser } from "ua-parser-js";
import { DeviceEnums } from "@/enums";

export type DeviceTypes = DeviceEnums | "";

/**
 * Will give device name
 */
export const getDeviceName = () => {
  const uaParser = new UAParser();
  return (uaParser.getDevice()?.type as DeviceTypes) || "";
};

/**
 * Will give browser name
 */
export const getBrowserName = (): IBrowser => {
  const uaParser = new UAParser();
  return uaParser.getBrowser();
};
