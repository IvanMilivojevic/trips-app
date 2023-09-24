import { Box, Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Trips = () => {
  const [trips, setTrips] = useState([])

  useEffect(() => {
    async function getTrips() {
      const response = await fetch("/trips")
      const result = await response.json()

      setTrips(result)
    }
    getTrips()
  }, [])

  console.log(trips)

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} width={["100%"]} mx="auto">
        ate
      </Grid>
    </Box>
  )
}

export default Trips
