import { useQuery } from 'react-query'
// import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import SealList from '../components/SealList'

const Home = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery('seals', () =>
    fetch(`${process.env.REACT_APP_API_URI}/seals`).then((res) => res.json())
  )

  if (error || isLoading) {
    return null
  }

  return (
    <div className="flex flex-col items-center py-20">
      <div className="pb-10">
        <img src={logo} alt="Seal Fighter logo" />
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-center">
          <h2 className="pb-2">Player One</h2>
          <span className="font-battle pb-16 opacity-70">Choose a seal</span>
          {!isLoading && !error && <SealList seals={data} />}
        </div>
        <div className="flex w-3/12 flex-col items-center justify-center font-battle text-7xl text-center">
          VS
        </div>
        <div className="flex flex-col items-center">
          <h2 className="pb-2">Player Two</h2>
          <span className="font-battle pb-16 opacity-70">Choose a seal</span>
          {!isLoading && !error && <SealList seals={data} />}
        </div>
      </div>
    </div>
  )
}

export default Home
