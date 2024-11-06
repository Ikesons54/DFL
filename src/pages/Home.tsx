import React, { useState, useCallback } from 'react'
import UrlInput from '../components/UrlInput'
import DownloadOptions from '../components/DownloadOptions'
import DownloadButton from '../components/DownloadButton'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'

function Home() {
  const [mediaType, setMediaType] = useState<'video' | 'audio' | null>(null)
  const [resolutions, setResolutions] = useState<string[]>([])
  const [selectedResolution, setSelectedResolution] = useState('')
  const [audioFormats, setAudioFormats] = useState<string[]>([])
  const [selectedAudioFormat, setSelectedAudioFormat] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleUrlSubmit = useCallback(async (url: string) => {
    if (!url) return
    setIsLoading(true)
    setError(null)
    try {
      // Simulating API call to fetch media info
      await new Promise((resolve) => setTimeout(resolve, 500)) // Reduced wait time to simulate faster processing
      
      setMediaType('video')
      setResolutions(['4K', '1080p', '720p', '480p', '360p', '240p'])
      setSelectedResolution('1080p')
      setAudioFormats(['MP3', 'AAC', 'WAV', 'FLAC'])
      setSelectedAudioFormat('MP3')
    } catch (err) {
      setError('Failed to fetch media information. Please check the URL and try again.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleDownload = () => {
    // Open ad in a new background tab
    window.open('https://www.google.com/adsense/start/', '_blank')

    // Simulating download process
    let progress = 0
    const interval = setInterval(() => {
      progress += 20 // Increased speed of progress
      setDownloadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        alert('Download complete!')
        setDownloadProgress(0)
      }
    }, 200) // Reduced interval for faster progress
  }

  const handleConvertToAudio = () => {
    setMediaType('audio')
    setSelectedAudioFormat('MP3')
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-md w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800 dark:text-white">DropLinkFast</h1>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
        Lightning-fast downloads for all your media needs!
      </p>
      <UrlInput onUrlSubmit={handleUrlSubmit} />
      {error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <DownloadOptions
            mediaType={mediaType}
            resolutions={resolutions}
            selectedResolution={selectedResolution}
            onResolutionChange={setSelectedResolution}
            audioFormats={audioFormats}
            selectedAudioFormat={selectedAudioFormat}
            onAudioFormatChange={setSelectedAudioFormat}
            onConvertToAudio={handleConvertToAudio}
          />
          <DownloadButton
            onClick={handleDownload}
            disabled={!mediaType}
            progress={downloadProgress}
          />
        </>
      )}
      <div className="mt-6 sm:mt-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-800 dark:text-white">Supported Platforms</h2>
        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-300 grid grid-cols-2 gap-1">
          <li>YouTube</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>TikTok</li>
          <li>Vimeo</li>
          <li>SoundCloud</li>
          <li>Dropbox</li>
          <li>Google Drive</li>
          <li>And more...</li>
        </ul>
      </div>
    </div>
  )
}

export default Home