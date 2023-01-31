import React, { useContext } from "react";
import { AuthContext } from "../../Context/context";
import {
  Input,
  InputLeftElement,
  InputGroup,
  Button,
  useToast,
} from "@chakra-ui/react";
const AllOrder = () => {
  const { allOrder } = useContext(AuthContext);
  return (
    <div>
      <div id="inputBox">
        <Input
          placeholder="Enter User ID"
          id="userId"
          background="white"
          w={"100%"}
        />

        <Button colorScheme="pink">Search</Button>
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

export default AllOrder;
