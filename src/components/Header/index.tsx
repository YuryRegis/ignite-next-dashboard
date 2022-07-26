import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import NotificationNav from "./NotificationNav";

export default function Header() {
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
      <Logo />

      <Search />

      <Flex ml="auto" align="center">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
