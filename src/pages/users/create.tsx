import { Header, Sidebar, Input } from "../../components";
import {
  Box,
  Flex,
  Button,
  VStack,
  HStack,
  Heading,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex px="6" my="6" w="100%" mx="auto" maxWidth={1400}>
        <Sidebar />

        <Box p="8" flex="1" bg="gray.800" borderRadious={8}>
          <Heading size="lg" fontWeight="normal">
            Criar usuários
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input label="Nome completo" name="name" />

              <Input label="E-mail" name="email" type="email" />
            </SimpleGrid>

            <SimpleGrid w="100%" minChildWidth="240px" spacing="8">
              <Input label="Senha" name="password" type="password" />

              <Input
                label="Confirmar senha"
                name="confirm-psw"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Confirmar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
