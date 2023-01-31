import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <>
    <ChakraProvider>
      <AllRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
