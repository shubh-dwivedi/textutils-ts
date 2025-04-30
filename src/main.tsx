import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
// import TextForm from './components/TextForm.tsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<TextForm />} />
//       <Route path='about' element={<About />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
