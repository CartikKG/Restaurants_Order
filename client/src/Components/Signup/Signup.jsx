import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Flex
      minH={"100vh"}
  
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w={"400px"}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Enter Name</FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Link to="/"> Already have an account </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
