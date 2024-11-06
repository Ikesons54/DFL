import React from 'react'
import { Download, ExternalLink } from 'lucide-react'

interface DownloadInfo {
  url: string
  title: string
  format: string
  thumbnail?: string
  duration?: string
  author?: string
}

interface DownloadCardProps {
  info: DownloadInfo
  onDownload: () => void
  isProcessing: boolean
}

const DownloadCard: React.FC<DownloadCardProps> = ({ info, onDownload, isProcessing }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mt-4">
      <div className="flex items-start space-x-4">
        {info.thumbnail && (
          <img 
            src={info.thumbnail} 
            alt={info.title}
            className="w-24 h-24 object-cover rounded-md"
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {info.title}
          </h3>
          {info.author && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              By {info.author}
            </p>
          )}
          <div className="flex items-center space-x-2 mt-2">
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
              {info.format.toUpperCase()}
            </span>
            {info.duration && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                {Math.floor(parseInt(info.duration) / 60)}:{(parseInt(info.duration) % 60).toString().padStart(2, '0')}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onDownload}
            disabled={isProcessing}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Download className="h-4 w-4 mr-1" />
            {isProcessing ? 'Processing...' : 'Download'}
          </button>
          <a
            href={info.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default DownloadCard