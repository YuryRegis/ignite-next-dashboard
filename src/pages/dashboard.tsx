import { Header, Sidebar } from "../components";
import { Flex, Button, Stack } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex px="6" my="6" w="100%" mx="auto" maxWidth={1400}>
        <Sidebar />
      </Flex>
    </Flex>
  );
}
