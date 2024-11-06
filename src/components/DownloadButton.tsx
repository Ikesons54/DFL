import React from 'react'
import { Download } from 'lucide-react'

interface DownloadButtonProps {
  onClick: () => void
  disabled: boolean
  progress: number
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onClick, disabled, progress }) => {
  return (
    <div className="relative">
      <button
        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <Download className="h-5 w-5 mr-2" />
        Download at Lightning Speed
      </button>
      {progress > 0 && progress < 100 && (
        <div className="absolute left-0 bottom-0 h-1 bg-green-500 transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }} />
      )}
    </div>
  )
}

export default DownloadButton