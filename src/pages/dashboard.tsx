import dynamic from "next/dynamic";
import { Header, Sidebar } from "../components";
import { Box, Flex, Text, SimpleGrid, theme } from "@chakra-ui/react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = {
  chart: {
    toolbar: false,
    zoom: { enabled: false },
    foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  stroke: { curve: "smooth" },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: { color: theme.colors.gray[600] },
    categories: [
      "2022-11-03T00:00:00.000Z",
      "2022-11-04T00:00:00.000Z",
      "2022-11-05T00:00:00.000Z",
      "2022-11-06T00:00:00.000Z",
      "2022-11-07T00:00:00.000Z",
      "2022-11-08T00:00:00.000Z",
      "2022-11-09T00:00:00.000Z",
      "2022-11-10T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series1",
    data: [30, 131, 45, 50, 3, 60, 99, 33],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex px="6" my="6" w="100%" mx="auto" maxWidth={1400}>
        <Sidebar />

        <SimpleGrid flex="1" gap="4" align="flex-start" minChildWidth="320px">
          <Box p="8" pb="4" bg="gray.800" borderRadious={8}>
            <Text>Inscritos na semana</Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>

          <Box p="8" pb="4" bg="gray.800" borderRadious={8}>
            <Text>Taxa de abertura</Text>
            <Chart type="area" height={160} series={series} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
