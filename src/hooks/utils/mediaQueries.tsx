import { useMediaQuery } from "~/hooks/useMediaQuery";

export const useIsSM = () => useMediaQuery("(min-width: 640px)");
export const useIsMD = () => useMediaQuery("(min-width: 768px)");
export const useIsLG = () => useMediaQuery("(min-width: 1024px)");
export const useIsXL = () => useMediaQuery("(min-width: 1280px)");
export const useIs2XL = () => useMediaQuery("(min-width: 1536px)");
