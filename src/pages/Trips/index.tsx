import { Container, Spinner, Text } from "@chakra-ui/react"
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroller"
import Card from "../../components/Card"
import type { TripsPageSlice } from "../../types"
import styles from "./Trips.module.css"

const getTrips = async ({ pageParam = 0 }): Promise<TripsPageSlice> => {
  const response = await fetch(`/trips?page=${pageParam}`)
  return await response.json()
}

const Trips = () => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["trips"],
    queryFn: getTrips,
    getNextPageParam: (lastPage, pages) => lastPage.next || undefined,
    staleTime: 300 * 1000, // fetched data is considered fresh for 5 minutes
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
        <Text>Error getting the data</Text>
      </Container>
    )
  }

  return (
    <Container maxW="1240px" p="5">
      {data.pages.length ? (
        <InfiniteScroll
          pageStart={0}
          // @ts-expect-error
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          // Must modify package component with custom CSS because internally creates wrapping div
          className={styles.cardContainer}
        >
          {data.pages.map(page => {
            return page.results.map(trip => {
              return <Card key={trip.id} info={trip} />
            })
          })}
        </InfiniteScroll>
      ) : null}
    </Container>
  )
}

export default Trips
