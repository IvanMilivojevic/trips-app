import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Trips from "."

const client = new QueryClient()

test("Render cards for Trips component", async () => {
  render(
    <QueryClientProvider client={client}>
      <Trips />
    </QueryClientProvider>
  )

  const tripTitles = await screen.findAllByRole("heading", {
    name: /european/i,
  })

  expect(tripTitles).toHaveLength(1)
})
