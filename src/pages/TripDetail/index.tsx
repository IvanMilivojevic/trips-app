import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import InfoList from "../../components/InfoList"
import Sidebar from "./Sidebar"

const getTrip = async (id?: string) => {
  const response = await fetch(`/trip/${id}`)
  return await response.json()
}

const TripDetail = () => {
  const navigate = useNavigate()
  const { tripId } = useParams()

  const {
    isLoading,
    isError,
    data: tripData,
  } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => getTrip(tripId),
    staleTime: 180 * 1000, // fetched data is considered fresh for 3 minutes
  })

  if (isLoading) {
    return (
      <Container minH="100vh" centerContent justifyContent="center">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Container>
    )
  }

  if (isError) {
    return (
      <Container minH="100vh" centerContent justifyContent="center">
        <Text>Error getting the page</Text>
      </Container>
    )
  }

  return (
    <Container maxW="1240px" p="5">
      <Button variant="link" onClick={() => navigate(-1)} textDecoration="underline">
        Go back
      </Button>
      <Heading as="h1" mt="6">
        {tripData.title}
      </Heading>
      <Heading as="h2" mt="3" fontSize="sm">
        {tripData.subtitle}
      </Heading>
      <Flex gap={{ base: "0px", lg: "40px" }} direction={{ base: "column", lg: "row" }}>
        <Box>
          <Box my="6">
            <Image src={tripData.photoUrl} alt={tripData.title} borderRadius="16px" w="100%" />
          </Box>
          <InfoList content={tripData.advantages} />
          <Divider borderColor="gray" my="5" />
          <Box my="6">{tripData.description}</Box>
        </Box>
        <Sidebar tripData={tripData} />
      </Flex>
    </Container>
  )
}

export default TripDetail
