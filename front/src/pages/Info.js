import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'

const images = require.context('../assets', true)

const Info = () => {
  const params = useParams()
  const { sealName } = params
  const {
    data = [],
    error,
    isLoading,
  } = useQuery('sealInfo', () =>
    fetch(`${process.env.REACT_APP_API_URI}/seals/${sealName}`).then((res) =>
      res.json()
    )
  )

  if (error || isLoading) {
    return null
  }

  const { name, hp, attack, defense, description, img_url: imgUrl } = data

  return (
    <div className="p-10 ">
      <Link to="/">
        <div className="font-battle pb-10">Back</div>
      </Link>
      <div className="w-2/4 m-auto">
        <div className="flex flex-row items-center">
          {imgUrl && (
            <img
              src={images(`./${imgUrl}`)}
              alt={`${name}_image`}
              className="h-44 w-44 rounded-lg border-7 border-yellow border-solid"
            />
          )}
          <h1 className="text-7xl ml-20">
            {name.replace('_', ' ').toUpperCase()}
          </h1>
        </div>
        <div className="mt-11 font-battle opacity-70 text-3xl flex justify-between">
          <span>HP: {hp}</span>
          <span>ATTACK: {attack}</span>
          <span>DEFENSE: {defense}</span>
        </div>
        <p className="opacity-70 mt-11">{description}</p>
        <Link to="/">
          <div className="m-auto w-72 text-center py-4 rounded-lg font-battle text-2xl bg-gradient-to-r from-linearStart to-linearEnd mt-24">
            CHOOSE THIS FIGHTER
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Info
