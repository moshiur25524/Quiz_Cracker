
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Main from './components/Layout/Main'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: 'blog',
          element: <Blog/>
        },
        {
          path: 'about',
          element: <About/>
        },
        { path: '*', element: <NotFound/>}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
