import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Formulários</NavLink>
        <NavLink icon={RiContactsLine}>Automação</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine}>Dashboard</NavLink>
        <NavLink icon={RiGitMergeLine}>Usuários</NavLink>
      </NavSection>
    </Stack>
  );
}
