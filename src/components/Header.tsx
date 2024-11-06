import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => window.location.reload()}>
          <img src="/path-to-your-logo.png" alt="DropLinkFast Logo" className="h-8 w-auto mr-2" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">DropLinkFast</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
            <li><Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">FAQ</Link></li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header