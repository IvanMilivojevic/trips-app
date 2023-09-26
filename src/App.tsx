import { ChakraProvider } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Trips from "./pages/Trips"
import TripDetail from "./pages/TripDetail"
import { theme } from "./theme"

const queryClient = new QueryClient()

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Trips />} />
          <Route path="/trip/:tripId" element={<TripDetail />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
