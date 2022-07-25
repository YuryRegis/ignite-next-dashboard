import { RiAddLine, RiEditLine } from "react-icons/ri";
import { Input, Header, Sidebar } from "../../components";
import {
  Box,
  Flex,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Icon,
  Checkbox,
} from "@chakra-ui/react";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex px="6" my="6" w="100%" mx="auto" maxWidth={1400}>
        <Sidebar />

        <Box p="8" flex="1" bg="gray.800" borderRadious={8}>
          <Flex mb="8" align="center" justify="space-between">
            <Heading as="h2" size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th w="8" px="6" color="gray.300">
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>

                <Th>Data de cadastro</Th>

                <Th w="8" />
              </Tr>
            </Thead>

            <Tbody>
              <Td px="6">
                <Checkbox colorScheme="pink" />
              </Td>

              <Td>
                <Box>
                  <Text fontWeight="bold">Dino Silva Sauro</Text>
                  <Text fontSize="sm" color="gray.300">
                    dino.sauro@mail.com
                  </Text>
                </Box>
              </Td>

              <Td>09 de Janeiro, 2021</Td>

              <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  leftIcon={<Icon as={RiEditLine} fontSize="20" />}
                >
                  Editar
                </Button>
              </Td>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
