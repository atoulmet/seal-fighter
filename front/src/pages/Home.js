import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const Home = () => {
  const { data, isLoading, error } = useQuery('repoData', () =>
    fetch(`${process.env.REACT_APP_API_URI}/seals`).then((res) => res.json())
  )
  const images = require.context('../../assets', true)

  return (
    <div>
      <h1 className="text-9xl text-amber-400">Seal Fighter V</h1>
      {!isLoading && !error && (
        <ul>
          {data.map((seal) => {
            const { id, name, img_url: imgUrl } = seal
            const displayName = name.replace('_', ' ').toUpperCase()

            return (
              <li key={`${name}_${id}`}>
                <Link to={`info/${id}`}>
                  <h2>{displayName}</h2>
                  <img src={images(`./${imgUrl}`)} alt={name} />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Home
