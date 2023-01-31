import React, { useContext } from "react";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
import "./AddOrder.css";
import { addOrderfun, getOrder } from "../../Actions/actions";
import { useEffect } from "react";
import { AuthContext } from "../../Context/context";
const AddOrder = () => {
  const { allOrder, setAllOrder } = useContext(AuthContext);
  const toast = useToast();
  async function add() {
    const userId = document.getElementById("userId").value;
    const sub_total = document.getElementById("totalBill").value;
    const phoneNumber = document.getElementById("phoneNumbers").value;
    if (userId == "" || sub_total == "" || phoneNumber == "") {
      toast({
        title: "Add item Failed",
        description: "Fill all the input",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      let res = await addOrderfun({ userId, sub_total, phoneNumber });
      if (!res.error) {
        toast({
          title: "Add item Success",
          description: "",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        getOrderfun();
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
    }
  }
  function getOrderfun() {
    getOrder()
      .then((res) => {
        setAllOrder(res);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    getOrderfun();
  }, []);
  return (
    <div>
      <div id="inputBox">
        <Input
          placeholder="Enter User ID"
          id="userId"
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
            placeholder="Sub Total"
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
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>SubTotal</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.order &&
              allOrder.order.allOrder.map((el, i) => {
                return (
                  <tr key={`${el * 2.3} +${el.userId} `}>
                    <td>{el.userId}</td>
                    <td>{el.sub_total}</td>
                    <td>{el.phoneNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddOrder;
