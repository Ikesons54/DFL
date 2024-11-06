import axios from 'axios'

interface DownloadOptions {
  url: string
  format?: string
  quality?: string
}

export const downloadContent = async ({ url, format = 'video', quality }: DownloadOptions) => {
  try {
    const response = await axios.post('/.netlify/functions/download', {
      url,
      format,
      quality
    })
    
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || 'Download failed')
    }
    throw error
  }
}

export const initiateDownload = (url: string, filename: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}