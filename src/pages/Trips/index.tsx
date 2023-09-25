import { Box, Flex } from "@chakra-ui/react"
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroller"
import { Link } from "react-router-dom"

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

  console.log(data)

  return (
    <Box textAlign="center" fontSize="xl">
      <Flex p={3} width={["100%"]} mx="auto">
        {data?.pages?.length ? (
          <InfiniteScroll
            pageStart={0}
            // @ts-expect-error
            loadMore={fetchNextPage}
            hasMore={hasNextPage}
          >
            {data?.pages.map(page => {
              return page.results.map((trip: any) => {
                return (
                  <div key={trip.id}>
                    <Link to={`/trip/${trip.id}`}>{trip.title}</Link>
                  </div>
                )
              })
            })}
          </InfiniteScroll>
        ) : null}
      </Flex>
    </Box>
  )
}

export default Trips
