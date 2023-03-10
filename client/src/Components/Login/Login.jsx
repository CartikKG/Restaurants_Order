import React, { useContext } from "react";
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
import { loginUser } from "../../Actions/actions";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/context";
const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  async function loginfun() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    if (phoneNumber == "" || password == "") {
      toast({
        title: "Login Failed!",
        description: "Fill all the details to Signup..",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      let res = await loginUser({ phoneNumber, password });
      if (!res.error) {
        localStorage.setItem("token", res.token);
        toast({
          title: "Login Successful",
          description: "",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        await setAuth(true)
        await navigate("/addorder");
      } else {
        toast({
          title: "Login Failed!",
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
          <FormLabel textAlign={"center"}>Login</FormLabel>
          <Stack spacing={4}>
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
                onClick={loginfun}
              >
                Sign in
              </Button>
              <Link style={{ textAlign: "center" }} to="/signup">
                {" "}
                Don't have any account{" "}
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
