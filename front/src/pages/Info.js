import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

const Info = () => {
  const params = useParams()
  const { sealId } = params
  const { data } = useQuery('repoData', () =>
    fetch(`${process.env.REACT_APP_API_URI}/seals/${sealId}`).then((res) =>
      res.json()
    )
  )
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Info
