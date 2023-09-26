import { Box, Flex } from "@chakra-ui/react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

interface RatingProps {
  rating: number
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <Flex align="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "#e5c208" : "gray.300"}
                size="20"
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} color="#e5c208" size="20" />
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} color="#e5c208" size="20" />
        })}
      <Box as="span" ml="2" color="black" fontSize="sm" fontWeight="bold">
        {rating}
      </Box>
    </Flex>
  )
}

export default Rating
