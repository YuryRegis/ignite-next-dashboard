import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text fontSize="lg" fontWeight="bold">
          Harry
        </Text>
        <Text color="gray.300" fontSize="small">
          harry@mail.com
        </Text>
      </Box>

      <Avatar size="md" name="Harry" src="http://github.com/yuryregis.png" />
    </Flex>
  );
}
