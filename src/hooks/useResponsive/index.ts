import { getDeviceName } from "@/helpers/userAgentHelpers";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

/**
 * Helps us handling responsive views and logics
 */
export default function useResponsive() {
  const deviceType = getDeviceName();
  const { xxl, xl, lg, md, sm } = useBreakpoint();

  /**
   * Device type based
   */
  const isTabletDevice = deviceType === "tablet";
  const isMobileDevice = deviceType === "mobile";

  /**
   * View port based
   */
  const isTabletView = !xxl && !xl && lg;
  const isMobileView = !xxl && !xl && !lg;

  const isMobile = isMobileView || isMobileDevice;
  const isTablet = isTabletView || isTabletDevice;
  const isTabletOrMobile = isTablet || isMobile;
  return {
    // includes device user agent type
    isMobile,
    isTablet,
    isTabletOrMobile,
    isDesktop: !isTabletOrMobile,
    // view port based
    isOnlyXXl: xxl,
    isOnlyXl: !xxl && xl,
    isOnlyLg: !xxl && !xl && lg,
    isOnlyMd: !xxl && !xl && !lg && md,
    isOnlySm: !xxl && !xl && !lg && !md && sm,
    isOnlyXs: !xxl && !xl && !lg && !md && !sm,
    // relative
    isLessThanXXl: !xxl,
    isLessThanXl: !xxl && !xl,
    isLessThanLg: !xxl && !xl && !lg,
    isLessThanMd: !xxl && !xl && !lg && !md,
    isLessThanSm: !xxl && !xl && !lg && !md && !sm,
    isGreaterThanXl: xxl,
    isGreaterThanLg: xxl || xl,
    isGreaterThanMd: xxl || xl || lg,
    isGreaterThanSm: xxl || xl || lg || md,
    isGreaterThanXs: xxl || xl || lg || md || sm,
  };
}
