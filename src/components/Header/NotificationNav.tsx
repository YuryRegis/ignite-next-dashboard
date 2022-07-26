import { Icon, HStack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export default function NotificationNav() {
  return (
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
  );
}
