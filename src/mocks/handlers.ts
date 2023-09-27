import { rest } from "msw"
import type { TripsData, TripData } from "../types"
import tripsData from "./resources/trips.json"
import singleTripData from "./resources/single-trip.json"

export const handlers = [
  rest.get("/trips", (req, res, ctx) => {
    const requestPage = req.url.searchParams.get("page")

    // Lets assume that this endpoint requires page param or returns error otherwise
    if (!requestPage) {
      return res(ctx.status(400), ctx.json({}))
    }

    const page = +requestPage

    const tripsPageResults: TripsData = tripsData.slice(page * 12, (page + 1) * 12)

    // This JSON response is optimized for handling in useInfiniteQuery
    // We can get only slice of results for requested page, and if next page can be requested
    return res(
      ctx.status(200),
      ctx.json({
        count: tripsData.length,
        next: (page + 1) * 12 < tripsData.length ? page + 1 : null,
        results: tripsPageResults,
      })
    )
  }),
  rest.get("/trip/:tripId", (req, res, ctx) => {
    const { tripId } = req.params

    // We could use the request param to get a specific trip from trips collection, based on ID
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tripDetails: TripData = tripsData.find(trip => trip.id === +tripId)!

    // But it is used a fixed json resource, to send the required data, considering it was provided
    return res(ctx.status(200), ctx.json(singleTripData))
  }),
]
