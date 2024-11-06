import React from 'react'

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does DropLinkFast work?",
      answer: "DropLinkFast allows you to download content from various platforms by simply pasting the URL of the content you want to download. Our system analyzes the link, fetches the available download options, and provides you with the best quality download."
    },
    {
      question: "Is DropLinkFast free to use?",
      answer: "DropLinkFast offers both free and premium plans. The free plan allows for a limited number of downloads per day, while our premium plans offer unlimited downloads, faster speeds, and additional features."
    },
    {
      question: "What platforms does DropLinkFast support?",
      answer: "DropLinkFast supports a wide range of platforms including YouTube, Facebook, Instagram, Twitter, TikTok, Vimeo, SoundCloud, Dropbox, Google Drive, and many more."
    },
    {
      question: "Is it legal to use DropLinkFast?",
      answer: "DropLinkFast is designed for personal use and for downloading content that you have the right to access. It's your responsibility to ensure that you're not violating any copyright laws or terms of service of the platforms you're downloading from."
    },
    {
      question: "How can I convert a video to audio?",
      answer: "After pasting a video URL, you'll see an option to 'Convert to Audio'. Click this button, choose your preferred audio format, and then proceed with the download."
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">{faq.question}</h2>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ