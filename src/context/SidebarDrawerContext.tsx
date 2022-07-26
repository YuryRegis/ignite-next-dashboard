import { createContext, ReactNode, useContext, useEffect } from "react";

import { useRouter } from "next/router";
import { useDisclosure, useDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = useDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
