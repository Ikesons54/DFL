import fetch from 'node-fetch'

export interface InstagramDownloadOptions {
  url: string
}

export const downloadInstagram = async ({ url }: InstagramDownloadOptions) => {
  const postId = url.match(/\/p\/([^/]+)/)?.[1]
  if (!postId) throw new Error('Invalid Instagram URL')

  const apiUrl = `https://www.instagram.com/p/${postId}/?__a=1`
  const response = await fetch(apiUrl)
  
  if (!response.ok) {
    throw new Error('Failed to fetch Instagram content')
  }

  const data = await response.json()
  const mediaUrl = data.graphql?.shortcode_media?.video_url || 
                  data.graphql?.shortcode_media?.display_url

  if (!mediaUrl) {
    throw new Error('No media found')
  }

  return {
    url: mediaUrl,
    title: `instagram_${postId}`,
    format: mediaUrl.includes('video') ? 'mp4' : 'jpg',
    thumbnail: data.graphql?.shortcode_media?.display_url,
    author: data.graphql?.shortcode_media?.owner?.username
  }
}