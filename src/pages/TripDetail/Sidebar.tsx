import { Card, CardBody, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { TripData } from "../../types"

interface SidebarProps {
  tripData: TripData
}

const Sidebar = ({ tripData }: SidebarProps) => {
  return (
    <Card my="6" alignSelf="flex-start" width="300px" flexShrink="0">
      <CardBody>
        <Text fontSize="24px" fontWeight="bold">
          {tripData.days} days
        </Text>
        <Text fontSize="16px" fontWeight="bold" color="gray">
          Emissions: {+tripData.co2kilograms.toFixed(0)} kg C0<sub>2</sub>e
        </Text>
        <Divider borderColor="gray" my="5" />
        <Text fontSize="16px" fontWeight="bold" color="gray" mb="2">
          Countries included:
        </Text>
        <UnorderedList display="flex" flexWrap="wrap">
          {tripData.countries.map((country: string) => {
            return (
              <ListItem key={country} width="45%">
                {country}
              </ListItem>
            )
          })}
        </UnorderedList>
      </CardBody>
    </Card>
  )
}

export default Sidebar
