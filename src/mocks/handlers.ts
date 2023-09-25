import { rest } from "msw"
import tripsData from "./resources/trips.json"
import singleTripData from "./resources/single-trip.json"

export const handlers = [
  rest.get("/trips", (req, res, ctx) => {
    const reqPage = req.url.searchParams.get("page")!

    const tripsPageResults = tripsData.slice(+reqPage * 12, (+reqPage + 1) * 12)

    // This JSON response is optimized for handling in useInfiniteQuery
    // We can get only slice of results for requested page, and if next page can be requested
    return res(
      ctx.status(200),
      ctx.json({
        count: tripsData.length,
        next: (+reqPage + 1) * 12 < tripsData.length ? +reqPage + 1 : null,
        results: tripsPageResults,
      })
    )
  }),
  rest.get("/trip/:tripId", (req, res, ctx) => {
    const { tripId } = req.params

    // We could use the request param to get a specific trip, based on ID
    const tripDetails = tripsData.find(trip => trip.id === +tripId) // eslint-disable-line

    // But it is used a fixed json resource, to send the required data, considering it was provided
    return res(ctx.status(200), ctx.json(singleTripData))
  }),
]
