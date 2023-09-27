export type TripAdvantage = {
  title: string
  description: string
}

export type TripData = {
  id: number
  photoUrl: string
  title: string
  subtitle: string
  countries: string[]
  days: number
  co2kilograms: number
  rating: number
  description: string
  advantages: TripAdvantage[]
}

export type TripsData = TripData[]

export type TripsPageSlice = {
  count: number
  next: number | null
  results: TripsData
}
