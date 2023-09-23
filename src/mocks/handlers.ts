import { rest } from "msw"
import tripsData from "./resources/trips.json"
import singleTripData from "./resources/single-trip.json"

export const handlers = [
  rest.get("/trips", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tripsData))
  }),

  rest.get("/trip/:tripId'", (req, res, ctx) => {
    // const { tripId } = req.params

    return res(ctx.status(200), ctx.json(singleTripData))
  }),
]
