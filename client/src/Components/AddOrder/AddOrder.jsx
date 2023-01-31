import React from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import "./AddOrder.css";
import { addOrderfun } from "../../Actions/actions";
const AddOrder = () => {
  const toast = useToast();
  async function add() {
    const itemName = document.getElementById("title").value;
    const sub_total = document.getElementById("totalBill").value;
    const phoneNumber = document.getElementById("phoneNumbers").value;
    if (itemName == "" || sub_total == "" || phoneNumber == "") {
      toast({
        title: "Add item Failed",
        description: "Fill all the input",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      let res = await addOrderfun({ itemName, sub_total, phoneNumber });
      console.log(res);
      if (!res.error) {
        toast({
          title: "Add item Success",
          description: "",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "Add item Failed",
          description: `${res.error}`,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
      // console.log(e=)
    }
  }
  return (
    <div>
      <div id="inputBox">
        <Input
          placeholder="Enter User ID"
          id="title"
          background="white"
          w={"50%"}
        />
        <InputGroup w={"35%"}>
          <InputLeftElement
            pointerEvents="none"
            color="gray.500"
            fontSize="1.1em"
            p={"0%"}
            m="0%"
            children="₹"
          />
          <Input
            placeholder="Item Price"
            id="totalBill"
            type="number"
            background="white"
          />
        </InputGroup>
        <Input
          placeholder="Phone Number"
          id="phoneNumbers"
          type="number"
          background="white"
        />
        <Button colorScheme="pink" onClick={add}>
          Add Order
        </Button>
      </div>
      <div id="addUser">
        <form action="">
          <input type="text" placeholder="Enter User Name" />
          <input type="text" placeholder="Enter User Phone Number" />
          <input type="text" placeholder="Enter User Password" />
          <input type="submit" value="Save User" />
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
