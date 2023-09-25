import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"

const getTrip = async (id?: string) => {
  const response = await fetch(`/trip/${id}`)
  return await response.json()
}

const TripDetail = () => {
  const navigate = useNavigate()
  const { tripId } = useParams()

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => getTrip(tripId),
    staleTime: 180 * 1000, // fetched data is considered fresh for 3 minutes
  })

  console.log(data)

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}

export default TripDetail
