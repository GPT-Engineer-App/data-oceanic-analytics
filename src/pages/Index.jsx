import { Box, Container, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text, VStack } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navigation Menu */}
        <Box bg="blue.800" color="white" px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              DataWiki
            </Heading>
            <Menu>
              <MenuButton as={Link}>
                <FaBars />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="#data-upload">
                  Upload Data
                </MenuItem>
                <MenuItem as={Link} href="#data-analysis">
                  Data Analysis
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="blue.50" minH="calc(100vh - 64px)">
          <VStack spacing={8}>
            <Heading as="h2" size="2xl" fontFamily="Bebas Neue, sans-serif">
              DataWiki
            </Heading>
            <Text fontSize="lg" maxW="lg" textAlign="center">
              Empowering businesses by transforming data into actionable insights.
            </Text>
            <Image src="https://images.unsplash.com/photo-1634403665443-81dc4d75843a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzZCUyMGludGVyYWN0aXZlJTIwaW1hZ2V8ZW58MHx8fHwxNzE0ODUyNzAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Interactive Data Visualization" boxSize="sm" objectFit="cover" />
          </VStack>
        </Flex>

        {/* Features Section */}
        <VStack spacing={8} p={8} align="stretch">
          <Heading as="h3" size="lg" fontFamily="Bebas Neue, sans-serif" textAlign="center">
            Why DataWiki?
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="space-around">
            <Box p={4} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl" fontFamily="Bebas Neue, sans-serif">
                Intuitive Analysis
              </Heading>
              <Text mt={4}>Simplify complex data with our user-friendly interface and powerful tools.</Text>
              <Image src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3MTQ4NTI3MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Simple Data Visualization" />
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl" fontFamily="Bebas Neue, sans-serif">
                Real-time Insights
              </Heading>
              <Text mt={4}>Get real-time updates and stay ahead with timely data analysis.</Text>
              <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWFsLXRpbWUlMjBkYXRhJTIwYW5hbHlzaXN8ZW58MHx8fHwxNzE0ODUyNzAzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Real-time Data Analysis" />
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl" fontFamily="Bebas Neue, sans-serif">
                Secure Storage
              </Heading>
              <Text mt={4}>Your data is stored securely and is accessible anytime.</Text>
              <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cmUlMjBkYXRhJTIwc3RvcmFnZXxlbnwwfHx8fDE3MTQ4NTI3MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Secure Data Storage" />
            </Box>
          </Flex>
        </VStack>

        {/* Data Upload and Analysis Page */}
        <Box id="data-upload" bg="blue.800" color="white" p={8}>
          <VStack spacing={4}>
            <Heading as="h4" size="lg" fontFamily="Bebas Neue, sans-serif">
              Upload and Analyze Your Data
            </Heading>
            <Text>Choose a file or drag it here.</Text>
            <input type="file" />
            <select>
              <option value="operation1">Operation 1</option>
              <option value="operation2">Operation 2</option>
              <option value="operation3">Operation 3</option>
            </select>
            <button>Start Analysis</button>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
