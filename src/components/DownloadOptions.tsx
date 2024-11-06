import React from 'react'

interface DownloadOptionsProps {
  mediaType: 'video' | 'audio' | null
  resolutions: string[]
  selectedResolution: string
  onResolutionChange: (resolution: string) => void
  audioFormats: string[]
  selectedAudioFormat: string
  onAudioFormatChange: (format: string) => void
  onConvertToAudio: () => void
}

const DownloadOptions: React.FC<DownloadOptionsProps> = ({
  mediaType,
  resolutions,
  selectedResolution,
  onResolutionChange,
  audioFormats,
  selectedAudioFormat,
  onAudioFormatChange,
  onConvertToAudio,
}) => {
  if (!mediaType) return null

  return (
    <div className="mb-4 space-y-2">
      {mediaType === 'video' && (
        <>
          <select
            value={selectedResolution}
            onChange={(e) => onResolutionChange(e.target.value)}
            className="block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {resolutions.map((resolution) => (
              <option key={resolution} value={resolution}>
                {resolution}
              </option>
            ))}
          </select>
          <button
            onClick={onConvertToAudio}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Convert to Audio
          </button>
        </>
      )}
      {mediaType === 'audio' && (
        <select
          value={selectedAudioFormat}
          onChange={(e) => onAudioFormatChange(e.target.value)}
          className="block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          {audioFormats.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}

export default DownloadOptions