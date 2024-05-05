
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, About, Dashboard, Signin, Signup, Projects } from './pages/index.js'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='sign-up' element={<Signup/>} />
        <Route path='sign-in' element={<Signin/>} />
        <Route path='about' element={<About/>} />
        <Route path='dashboard' element={<Dashboard/>} />
      </Route>
    )
  )
  return (
    <div className="bg-gray-700 text-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
