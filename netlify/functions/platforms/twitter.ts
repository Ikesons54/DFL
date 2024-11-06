import fetch from 'node-fetch'

export interface TwitterDownloadOptions {
  url: string
}

export const downloadTwitter = async ({ url }: TwitterDownloadOptions) => {
  const tweetId = url.match(/status\/(\d+)/)?.[1]
  if (!tweetId) throw new Error('Invalid Twitter URL')

  const apiUrl = `https://api.twitter.com/2/tweets/${tweetId}?expansions=attachments.media_keys&media.fields=url,variants`
  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Twitter content')
  }

  const data = await response.json()
  const mediaUrl = data.includes?.media?.[0]?.url || 
                  data.includes?.media?.[0]?.variants?.[0]?.url

  if (!mediaUrl) {
    throw new Error('No media found')
  }

  return {
    url: mediaUrl,
    title: `twitter_${tweetId}`,
    format: mediaUrl.includes('video') ? 'mp4' : 'jpg',
    author: data.data?.author_id
  }
}