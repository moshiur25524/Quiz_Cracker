
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Main from './components/Layout/Main'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import QuizDetails from './components/QuizDetails/QuizDetails'
import Statistics from './components/Statistics/Statistics'

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
          path: '/api/quiz/:id',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <QuizDetails />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz/'),
          element: <Statistics />
        },
        { path: '*', element: <NotFound /> }
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
