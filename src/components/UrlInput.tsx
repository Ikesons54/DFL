import React, { useState } from 'react'
import { Link } from 'lucide-react'
import { downloadContent, initiateDownload } from '../services/api'
import DownloadCard from './DownloadCard'

interface UrlInputProps {
  onUrlSubmit: (url: string) => void
}

const UrlInput: React.FC<UrlInputProps> = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [downloadInfo, setDownloadInfo] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsProcessing(true)
    setError('')
    setDownloadInfo(null)

    try {
      const info = await downloadContent({ url })
      setDownloadInfo(info)
      onUrlSubmit(url)
    } catch (err) {
      setError(err.message || 'Failed to process URL')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (downloadInfo) {
      initiateDownload(downloadInfo.url, `${downloadInfo.title}.${downloadInfo.format}`)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Paste URL to download"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isProcessing}
          />
        </div>
        {error && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        <button
          type="submit"
          className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isProcessing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Get Download Link'}
        </button>
      </form>

      {downloadInfo && (
        <DownloadCard
          info={downloadInfo}
          onDownload={handleDownload}
          isProcessing={isProcessing}
        />
      )}
    </div>
  )
}

export default UrlInput