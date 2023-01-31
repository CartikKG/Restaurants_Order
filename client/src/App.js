import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
