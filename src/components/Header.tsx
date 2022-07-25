import { Box, Flex, Text, Input, Icon, HStack, Avatar } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

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
      <Text w="64" fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        Dashboard
        <Text ml="1" as="span" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        py="4"
        px="8"
        ml="6"
        flex="1"
        as="label"
        bg="gray.800"
        maxWidth={400}
        color="gray.200"
        alignSelf="center"
        position="relative"
        borderRadius="full"
      >
        <Input
          px="4"
          mr="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Pesquisar"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" color="gray.400" />
      </Flex>

      <Flex ml="auto" align="center">
        <HStack
          py="1"
          mx="8"
          pr="8"
          spacing="8"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon fontSize="20" as={RiNotificationLine} />
          <Icon fontSize="20" as={RiUserAddLine} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text fontSize="lg" fontWeight="bold">
              Harry
            </Text>
            <Text color="gray.300" fontSize="small">
              harry@mail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Harry"
            src="http://github.com/yuryregis.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
