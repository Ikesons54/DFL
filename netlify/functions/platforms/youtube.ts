import ytdl from 'ytdl-core'

export interface YouTubeDownloadOptions {
  url: string
  format: string
  quality?: string
}

export const downloadYouTube = async ({ url, format, quality }: YouTubeDownloadOptions) => {
  const info = await ytdl.getInfo(url)
  const format_id = format === 'audio' ? 'mp3' : 'mp4'
  const videoFormat = ytdl.chooseFormat(info.formats, {
    quality: quality || 'highest',
    filter: format === 'audio' ? 'audioonly' : 'videoandaudio'
  })
  
  return {
    url: videoFormat.url,
    title: info.videoDetails.title,
    format: format_id,
    thumbnail: info.videoDetails.thumbnails[0]?.url,
    duration: info.videoDetails.lengthSeconds,
    author: info.videoDetails.author.name
  }
}