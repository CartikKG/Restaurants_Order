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
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { registeredUser } from "../../Actions/actions";
const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  async function Signup() {
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    if (name == "" || phoneNumber == "" || password == "") {
      toast({
        title: "SignUp Failed!!",
        description: "Fill all the details to Signup..",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      let res = await registeredUser({ name, phoneNumber, password });
      if (!res.error) {
        toast({
          title: "SignUp Successful",
          description: "Login to Continue..",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "SignUp Successful",
          description: `${res.error}`,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    }
  }
  return (
    <Flex
      minH={"90vh"}
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
          <FormLabel textAlign={"center"}>SignUp</FormLabel>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Enter Name</FormLabel>
              <Input type="text" id="name" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" id="phoneNumber" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" id="password" />
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
                onClick={Signup}
              >
                Sign up
              </Button>
            </Stack>
            <Link style={{ textAlign: "center" }} to="/">
              {" "}
              Already have an account{" "}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
