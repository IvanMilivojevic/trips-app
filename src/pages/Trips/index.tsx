import { Container } from "@chakra-ui/react"
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroller"
import Card from "../../components/Card"
import type { TripData } from "../../types"
import styles from "./Trips.module.css"

const getTrips = async ({ pageParam = 0 }) => {
  const response = await fetch(`/trips?page=${pageParam}`)
  return await response.json()
}

const Trips = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["trips"],
      queryFn: getTrips,
      getNextPageParam: (lastPage, pages) => lastPage.next || undefined,
      staleTime: 300 * 1000,
    })

  return (
    <Container maxW="1240px" p="5">
      {data?.pages?.length ? (
        <InfiniteScroll
          pageStart={0}
          // @ts-expect-error
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          className={styles.cardContainer}
        >
          {data?.pages.map(page => {
            return page.results.map((trip: TripData) => {
              return <Card info={trip} />
            })
          })}
        </InfiniteScroll>
      ) : null}
    </Container>
  )
}

export default Trips
