import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/Home'
import Info from './pages/Info'

const queryClient = new QueryClient()

const Router = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seals/:sealName" element={<Info />} />
    </Routes>
  </QueryClientProvider>
)

const App = () => <Router />

export default App
