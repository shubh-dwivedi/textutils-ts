import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { ThemeProvider } from '@material-tailwind/react'
import TextForm from './components/TextForm'
// import { Outlet } from 'react-router'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleThemeMode = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    let elem: any = document.querySelector('html')
    elem.classList.remove("light", "dark")
    elem.classList.add(darkMode ? 'dark' : 'light')

    let elemBody: any = document.querySelector('body')
    elemBody.classList.remove("bg-gray-900", "bg-white")
    elemBody.classList.add(darkMode ? "bg-gray-900" : "bg-white")
  }, [darkMode])

  return (
    <ThemeProvider value={{darkMode, toggleThemeMode}}>
      <NavBar />
      <TextForm />
    </ThemeProvider>
  )
}

export default App
