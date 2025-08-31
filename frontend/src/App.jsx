// import { Box, Button } from '@chakra-ui/react'
// import { Route, Routes } from 'react-router-dom'
// import CreatePage from './pages/CreatePage'
// import HomePage from './pages/HomePage'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <Box minH={"100vh"}>
//       <Navbar />
//       <Button colorScheme="blue">Click me</Button>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/create" element={<CreatePage />} />
//       </Routes>
//     </Box>
//   )
// }

import { Box, Button } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

function Home()   { return <Box p={6}>Home</Box>; }
function Create() { return <Box p={6}>Create</Box>; }

export default function App() {
  return (
    <Box p={24}>
      <Box mb={4}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/create">Create</Link>
      </Box>
      <Button colorScheme="blue" mb={4}>Router v6 OK</Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Box>
  );
}
