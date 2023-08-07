import { useMediaQuery } from "usehooks-ts";

export const isSmallDevice = () => useMediaQuery("(max-width : 768px)");
