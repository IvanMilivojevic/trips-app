import {
  Flex,
  Text,
  Heading,
  Link as ChakraLink,
  Stack,
  Card as ChakraCard,
  CardBody,
} from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"
import type { TripData } from "../../types"
import Rating from "../Rating"

interface CardProps {
  info: TripData
}

const Card = (props: CardProps) => {
  const {
    info: { photoUrl, title, countries, days, id, co2kilograms, rating },
  } = props

  return (
    <ChakraCard borderRadius="16">
      <CardBody p="3">
        <Stack
          p={[4, 4, 6]}
          pb={[0, 0, 0]}
          w="100%"
          h="100%"
          borderRadius="16"
          bgImage={`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${photoUrl})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          align="center"
          spacing="0"
        >
          <Heading
            as="h3"
            size="md"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            minH="50px"
            textAlign="center"
            color="white"
            fontWeight="medium"
            mb="2"
            role="heading"
          >
            {title}
          </Heading>
          <Text
            mt="auto"
            fontSize="sm"
            fontWeight="normal"
            lineHeight="short"
            textAlign="center"
            color="white"
          >
            {countries.length} {countries.length > 1 ? "Countries" : "Country"}, {days}{" "}
            {days > 1 ? "Days" : "Day"}
          </Text>
          <ChakraLink
            as={ReactRouterLink}
            to={`/trip/${id}`}
            bgColor="#1d67bf"
            color="white"
            px="4"
            py="2"
            my="6"
            borderRadius="8"
            _hover={{ textDecoration: "none", bgColor: "#07428a" }}
          >
            Learn more
          </ChakraLink>
          <Flex
            w="100%"
            maxW="320px"
            color="white"
            justify="space-between"
            bgColor="#000033"
            borderRadius="8px"
            py="3"
            px="4"
          >
            <Text>Emissions offset:</Text>
            <Text>
              {co2kilograms.toFixed(0)} kg C0<sub>2</sub>e
            </Text>
          </Flex>
          <Flex
            mt="3"
            justify="space-between"
            w="100%"
            maxW="320px"
            bgColor="white"
            color="black"
            p="3.5"
            borderTopLeftRadius="8px"
            borderTopRightRadius="8px"
          >
            <Text fontWeight="bold">Trip rating</Text>
            <Rating rating={rating} />
          </Flex>
        </Stack>
      </CardBody>
    </ChakraCard>
  )
}

export default Card
