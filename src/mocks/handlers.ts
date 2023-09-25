import { rest } from "msw"
import tripsData from "./resources/trips.json"
import singleTripData from "./resources/single-trip.json"

export const handlers = [
  rest.get("/trips", (req, res, ctx) => {
    const reqPage = req.url.search?.replace("?", "").split("=")[1]

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

  rest.get("/trip/:tripId'", (req, res, ctx) => {
    // const { tripId } = req.params

    return res(ctx.status(200), ctx.json(singleTripData))
  }),
]
