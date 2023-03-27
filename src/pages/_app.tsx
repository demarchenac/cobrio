import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { useCycle } from "framer-motion";
import { Sidebar } from "~/components/Sidebar";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [showSidebar, cycleSidebarVisibility] = useCycle(true, false);
  return (
    <ClerkProvider {...pageProps}>
      <button onClick={() => cycleSidebarVisibility()}>
        {showSidebar ? "Cerrar" : "Abrir"}
      </button>
      <Sidebar isVisible={showSidebar} onClose={cycleSidebarVisibility} />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
