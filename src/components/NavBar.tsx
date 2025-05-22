import { useTheme } from '@material-tailwind/react'
import { useEffect } from 'react'

export default function Navbar() {
  const {darkMode, toggleThemeMode} = useTheme();

  useEffect(() => {
    if(darkMode) {
        document.querySelector("theme-toggle-dark-icon")?.classList.remove
    }
    if(!darkMode) {
        document.querySelector("theme-toggle-light-icon")?.classList.remove
    }
  }, [darkMode])
  

  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-700 dark:text-white">
            <div className="flex max-sm:justify-end gap-4 justify-between items-center">
                <div className="flex items-start text-2xl font-bold">
                    TextUtils
                </div>
                
                <div className="justify-end items-end w-full lg:w-auto max-sm:flex"
                    id="mobile-menu-2" title={!darkMode ? 'Dark Theme' : 'Light Theme'}>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            onChange={toggleThemeMode}
                            checked={darkMode}
                        />
                        <div
                            className="peer px-2 flex h-9 items-center rounded-full bg-gray-100 peer-checked:bg-stone-600 peer-focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white text-black"
                        >
                            {darkMode && <span>☀️</span>}
                            {!darkMode && <span>🌑</span>}
                        </div>
                    </label>
                </div>
            </div>
        </nav>
    </header>
  )
}