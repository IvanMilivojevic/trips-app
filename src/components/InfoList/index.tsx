import { Card, CardBody, Container, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { MdSettings, MdAccountBox, MdBackup, MdSettingsEthernet } from "react-icons/md"

interface InfoListProps {
  content: {
    description: string
    title: string
  }[]
}

const InfoList = ({ content }: InfoListProps) => {
  const iconList = [MdSettings, MdAccountBox, MdBackup, MdSettingsEthernet]

  return (
    <Container w="100%" maxW="100%" p="0">
      <Text mb="4" fontSize="lg" fontWeight="bold">
        Overview
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="20px">
        {content.map((item, index) => {
          return (
            <Card
              key={item.title}
              direction={{ sm: "row" }}
              bgColor="transparent"
              variant="unstyled"
            >
              <Icon as={iconList[index]} boxSize="10" mr="4" />
              <CardBody p="0">
                <Heading size="md">{item.title}</Heading>
                <Text py="2">{item.description}</Text>
              </CardBody>
            </Card>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default InfoList
