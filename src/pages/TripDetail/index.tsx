import { useNavigate } from "react-router-dom"

const TripDetail = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}

export default TripDetail
