import React from "react";
import { Input, InputLeftElement, InputGroup, Button } from "@chakra-ui/react";
import "./AddOrder.css";
const AddOrder = () => {
  return (
    <div>
      <div id="inputBox">
        <Input
          placeholder="Item Name"
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
          placeholder="Quantity"
          id="qty"
          type="number"
          background="white"
        />
        <Button colorScheme="pink">Add Order</Button>
      </div>
      <div id="allproduct">

      </div>
    </div>
  );
};

export default AddOrder;
