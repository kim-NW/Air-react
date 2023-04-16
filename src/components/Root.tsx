import Header from "./Header";

import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  )
}