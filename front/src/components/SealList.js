import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const images = require.context('../assets', true)

const SealList = ({ seals = [] }) => (
  <ul className="grid grid-cols-3 gap-9">
    {seals.map((seal) => {
      const { id, name, img_url: imgUrl } = seal
      const displayName = name.replace('_', ' ').toUpperCase()

      return (
        <li key={`${name}_${id}`} className="text-center">
          <Link to={`info/${id}`}>
            {imgUrl && (
              <img
                src={images(`./${imgUrl}`)}
                alt={name}
                className="h-24 w-24 rounded-lg border-7 border-yellow border-solid hover:border-red"
              />
            )}
            <span className="font-battle">{displayName}</span>
          </Link>
        </li>
      )
    })}
  </ul>
)

SealList.propTypes = {
  seals: PropTypes.instanceOf(Array).isRequired,
}

export default SealList
