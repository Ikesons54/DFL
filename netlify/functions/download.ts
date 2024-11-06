import { Handler } from '@netlify/functions'
import { downloadYouTube } from './platforms/youtube'
import { downloadInstagram } from './platforms/instagram'
import { downloadTwitter } from './platforms/twitter'
import fetch from 'node-fetch'

interface DownloadRequest {
  url: string
  format?: string
  quality?: string
}

const getPlatform = (url: string): string => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
  if (url.includes('instagram.com')) return 'instagram'
  if (url.includes('twitter.com')) return 'twitter'
  return 'generic'
}

const downloadGeneric = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch URL')
  
  const contentType = response.headers.get('content-type') || ''
  const format = contentType.includes('video') ? 'mp4' : 
                contentType.includes('audio') ? 'mp3' : 
                contentType.includes('image') ? 'jpg' : 'bin'

  return {
    url,
    title: url.split('/').pop() || 'download',
    format
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  try {
    const { url, format, quality }: DownloadRequest = JSON.parse(event.body || '{}')
    if (!url) {
      return { statusCode: 400, body: JSON.stringify({ error: 'URL is required' }) }
    }

    const platform = getPlatform(url)
    let downloadInfo

    switch (platform) {
      case 'youtube':
        downloadInfo = await downloadYouTube({ url, format: format || 'video', quality })
        break
      case 'instagram':
        downloadInfo = await downloadInstagram({ url })
        break
      case 'twitter':
        downloadInfo = await downloadTwitter({ url })
        break
      default:
        downloadInfo = await downloadGeneric(url)
    }

    return {
      statusCode: 200,
      body: JSON.stringify(downloadInfo)
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    }
  }
}