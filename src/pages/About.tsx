import React from 'react'

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">About DropLinkFast</h1>
      <div className="text-gray-600 dark:text-gray-300 space-y-4">
        <p>
          DropLinkFast is your go-to solution for quick and easy downloads from various online platforms. Our mission is to simplify the process of accessing and saving content from social media, file hosting services, and document sharing sites.
        </p>
        <p>
          With DropLinkFast, you can:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Download videos from popular social media platforms</li>
          <li>Save images and photo albums with a single click</li>
          <li>Retrieve documents and files from cloud storage services</li>
          <li>Access content from various websites using just a URL</li>
        </ul>
        <p>
          Our user-friendly interface and powerful backend ensure that you can quickly get the content you need without any hassle. Simply paste the URL, and let DropLinkFast handle the rest!
        </p>
        <p>
          We're committed to providing a safe, legal, and efficient service. DropLinkFast respects copyright laws and terms of service for all platforms. We encourage our users to download content responsibly and only when they have the right to do so.
        </p>
        <p>
          Thank you for choosing DropLinkFast. We're constantly working to improve our service and add support for more platforms. If you have any questions or suggestions, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  )
}

export default About