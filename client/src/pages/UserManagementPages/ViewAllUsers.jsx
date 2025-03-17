import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { HiOutlineSelector } from "react-icons/hi";
import {
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
  TextInput,
  UnstyledButton,
  Title,
  Box,
  Paper,
  Flex,
  Button,
  Divider,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const ViewAllUsers = () => {
  const matches = useMediaQuery("(min-width: 500px)");

  const Th = ({ children, sorted, reversed, onSort }) => {
    const Icon = sorted
      ? reversed
        ? FaChevronUp
        : FaChevronDown
      : HiOutlineSelector;
    return (
      <Table.Th>
        <UnstyledButton onClick={onSort} style={{ width: "100%" }}>
          <Group justify="space-between">
            <Text fw={500} fz="sm">
              {children}
            </Text>
            <Center>
              <Icon size={16} strokeWidth={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      </Table.Th>
    );
  };

  const filterData = (data, search) => {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      Object.keys(item).some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const sortData = (data, { sortBy, reversed, search }) => {
    if (!sortBy) return filterData(data, search);
    return filterData(
      [...data].sort((a, b) =>
        reversed
          ? b[sortBy].localeCompare(a[sortBy])
          : a[sortBy].localeCompare(b[sortBy])
      ),
      search
    );
  };

  const data = [
    {
      name: "Athena Weissnat",
      company: "Little - Rippin",
      email: "Elouise.Prohaska@yahoo.com",
    },
    {
      name: "Deangelo Runolfsson",
      company: "Greenfelder - Krajcik",
      email: "Kadin_Trantow87@yahoo.com",
    },
    {
      name: "Danny Carter",
      company: "Kohler and Sons",
      email: "Marina3@hotmail.com",
    },
    {
      name: "Trace Tremblay PhD",
      company: "Crona, Aufderhar and Senger",
      email: "Antonina.Pouros@yahoo.com",
    },
  ];

  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.company}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Box maw={1200} mx="auto" p="lg" shadow="sm" withBorder>
      <Paper shadow="xl" radius="lg" p="xl">
        <Flex gap="md" justify="center" align="center" wrap="wrap">
          <Button
            variant="gradient"
            size="xl"
            radius="xs"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            w={matches ? "500px" : "100%"}
            style={{
              fontSize: "1.8rem",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Users Data
          </Button>
        </Flex>

        <Divider my="sm" />
        <Box p="lg" style={{ maxWidth: "1200px", margin: "auto" }}>
          <TextInput
            placeholder="Search by any field"
            mb="md"
            leftSection={<FaSearch size={16} strokeWidth={1.5} />}
            value={search}
            onChange={handleSearchChange}
          />
          <ScrollArea w="100%">
            <Table
              horizontalSpacing="md"
              verticalSpacing="xs"
              miw={700}
              layout="fixed"
              style={{ maxWidth: "100%" }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Th
                    sorted={sortBy === "name"}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("name")}
                  >
                    Name
                  </Th>
                  <Th
                    sorted={sortBy === "email"}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("email")}
                  >
                    Email
                  </Th>
                  <Th
                    sorted={sortBy === "company"}
                    reversed={reverseSortDirection}
                    onSort={() => setSorting("company")}
                  >
                    Company
                  </Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {rows.length > 0 ? (
                  rows
                ) : (
                  <Table.Tr>
                    <Table.Td colSpan={3}>
                      <Text fw={500} ta="center">
                        Nothing found
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Box>
      </Paper>
    </Box>
  );
};

export default ViewAllUsers;
