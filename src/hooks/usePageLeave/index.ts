import { useEffect } from "react";

const usePageLeaveDetection = (callback?: () => void): void => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      callback?.();
    };

    const handlePopstate = () => {
      callback?.();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [callback]);
};

export default usePageLeaveDetection;
