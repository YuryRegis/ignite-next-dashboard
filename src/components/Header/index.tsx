import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import NotificationNav from "./NotificationNav";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";

export default function Header() {
  const { onOpen } = useSidebarDrawer();
  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      px="6"
      mt="4"
      h="20"
      w="100%"
      mx="auto"
      as="header"
      align="center"
      maxWidth={1480}
    >
      {!isLargeScreen && (
        <IconButton
          mr="2"
          fontSize="24"
          onClick={onOpen}
          variant="unstyled"
          aria-label="Open menu"
          icon={<Icon as={RiMenuLine} />}
        />
      )}

      <Logo />

      {isLargeScreen && <Search />}

      <Flex ml="auto" align="center">
        <NotificationNav />
        <Profile showProfileData={isLargeScreen} />
      </Flex>
    </Flex>
  );
}
