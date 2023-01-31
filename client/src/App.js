import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./Context/context";
function App() {
  return (
    <>
      <AuthContextProvider>
        <ChakraProvider>
          <Navbar />
          <AllRoutes />
        </ChakraProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
